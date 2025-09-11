import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration"; // ✅ default import

// GET /api/registrations/[ticketNo]
export async function GET(
  _req: Request,
  { params }: { params: { ticketNo: string } }
) {
  try {
    await connectDB();

    const { ticketNo } = params;
    const parsedTicketNo = Number(ticketNo);

    if (!ticketNo || isNaN(parsedTicketNo)) {
      return NextResponse.json(
        { success: false, message: "Invalid ticket number" },
        { status: 400 }
      );
    }

    const registration = await Registration.findOne({ ticketNo: parsedTicketNo }).lean();

    if (!registration) {
      return NextResponse.json(
        { success: false, message: "Registration not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: registration });
  } catch (error) {
    console.error("❌ Error fetching registration:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
