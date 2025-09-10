import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ ticketNo: string }> }
) {
  try {
    await connectDB();

    // Await params because Next.js 15 provides it as a Promise
    const { ticketNo } = await params;
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
