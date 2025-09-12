import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";

// GET /api/registrations/[ticketNo]
export async function GET(
  request: NextRequest,
  { params }: { params: { ticketNo: string } } // ✅ make sure ticketNo is string
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
