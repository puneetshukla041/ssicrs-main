import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { MongoClient, GridFSBucket, ObjectId } from "mongodb";
import Registration from "@/models/Registration";
import { Readable } from "stream";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error("⚠️ Please define MONGODB_URI in .env.local");

// Create Mongoose connection for regular document saving
if (!mongoose.connection.readyState) {
  await mongoose.connect(MONGODB_URI);
}

// Create native MongoClient for GridFS
const mongoClient = new MongoClient(MONGODB_URI);
await mongoClient.connect();
const db = mongoClient.db(); // default database from URI
const bucket = new GridFSBucket(db, { bucketName: "uploads" });

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Full Name and Email are required" },
        { status: 400 }
      );
    }

    // File upload handling
    const uploadFile = formData.get("uploadId") as File | null;
    let uploadId: ObjectId | null = null;
    let uploadName: string | null = null;

    if (uploadFile) {
      uploadName = uploadFile.name;
      const buffer = Buffer.from(await uploadFile.arrayBuffer());
      const readable = Readable.from(buffer);

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

    // Parse array fields
    const trainingPrograms = formData.getAll("trainingPrograms").map(v => v.toString());
    const additionalPrograms = formData.getAll("additionalPrograms").map(v => v.toString());

    // Save registration using Mongoose
    const structuredData = {
      fullName,
      email,
      phoneNumber: formData.get("phoneNumber")?.toString() || undefined,
      dob: formData.get("dob") ? new Date(formData.get("dob")!.toString()) : undefined,
      experience: formData.get("experience") ? parseInt(formData.get("experience")!.toString()) : undefined,
      institution: formData.get("institution")?.toString() || undefined,
      callDateTime: formData.get("callDateTime") ? new Date(formData.get("callDateTime")!.toString()) : undefined,
      hearAboutUs: formData.get("hearAboutUs")?.toString() || undefined,
      currentProfession: formData.get("currentProfession")?.toString() || undefined,
      specialization: formData.get("specialization")?.toString() || undefined,
      learningGoals: formData.get("learningGoals")?.toString() || undefined,
      trainingPrograms,
      additionalPrograms,
      termsAgree: formData.get("termsAgree") === "on" || formData.get("termsAgree") === "true",
      uploadId,
      uploadName,
    };

    const newRegistration = new Registration(structuredData);
    await newRegistration.save();

    return NextResponse.json({ success: true, data: newRegistration });
  } catch (err: any) {
    console.error("Registration error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
