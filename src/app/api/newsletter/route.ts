import { NextResponse } from "next/server";
import { NEWSLETTER_LIST } from "../../../constants/newsletter";
import { sendEmail } from "../../../lib/nodemailer";

export async function POST(request: Request) {
    const { subject, content } = await request.json();

    if (!subject || !content) {
        return NextResponse.json(
            { success: false, message: "Subject and content are required" },
            { status: 400 }
        );
    }

    try {
        for (const recipient of NEWSLETTER_LIST) {
            await sendEmail(recipient.mail, subject, content);
        }
        return NextResponse.json({
            success: true,
            message: "Newsletter sent successfully!",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to send newsletter" },
            { status: 500 }
        );
    }
}
