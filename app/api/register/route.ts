import { NextResponse } from "next/server";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";
import { Readable } from "stream";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";

let bucket: GridFSBucket | null = null;

async function getBucket() {
  if (!bucket) {
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();
    bucket = new GridFSBucket(db, { bucketName: "uploads" });
  }
  return bucket;
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString();
    const email = formData.get("email")?.toString();

    if (!fullName || !email) {
      return NextResponse.json({ success: false, error: "Full Name and Email are required" }, { status: 400 });
    }

    // File upload
    const uploadFile = formData.get("uploadId") as File | null;
    let uploadId: ObjectId | null = null;
    let uploadName: string | null = null;

    if (uploadFile) {
      uploadName = uploadFile.name;
      const buffer = Buffer.from(await uploadFile.arrayBuffer());
      const readable = Readable.from(buffer);

      const bucket = await getBucket();
      const uploadStream = bucket.openUploadStream(uploadName);
      readable.pipe(uploadStream);

      await new Promise<void>((resolve, reject) => {
        uploadStream.on("finish", () => {
          uploadId = uploadStream.id as ObjectId;
          resolve();
        });
        uploadStream.on("error", reject);
      });
    }

    // Arrays
    const trainingPrograms = formData.getAll("trainingPrograms").map(v => v.toString());
    const additionalPrograms = formData.getAll("additionalPrograms").map(v => v.toString());
    const termsAgree = formData.get("termsAgree") === "on" || formData.get("termsAgree") === "true";

    // ✅ Get next ticket number
    const ticketNo = await Registration.getNextTicketNo();

    // Create registration
    const newRegistration = new Registration({
      ticketNo,
      fullName,
      email,
      phoneNumber: formData.get("phoneNumber")?.toString(),
      dob: formData.get("dob") ? new Date(formData.get("dob")!.toString()) : undefined,
      experience: formData.get("experience")?.toString(),
      institution: formData.get("institution")?.toString(),
      callDateTime: formData.get("callDateTime")?.toString(),
      hearAboutUs: formData.get("hearAboutUs")?.toString(),
      currentProfession: formData.get("currentProfession")?.toString(),
      specialization: formData.get("specialization")?.toString(),
      learningGoals: formData.get("learningGoals")?.toString(),
      trainingPrograms,
      additionalPrograms,
      termsAgree,
      uploadId,
      uploadName,
    });

    await newRegistration.save();

    return NextResponse.json({ success: true, ticketNo, data: newRegistration });
  } catch (err: unknown) {
    console.error("❌ Registration error:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
