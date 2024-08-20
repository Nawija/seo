import { NextResponse } from "next/server";
import NewsletterModel from "@/models/newsletterModel";
import connectDB from "@/config/db";
import { sendEmail } from "@/lib/nodemailer";

export async function POST(request: Request) {
    await connectDB();
    
    try {
        const { email, subject, content } = await request.json();

        if (email) {
            // Dodanie e-maila do MongoDB
            const newSubscriber = new NewsletterModel({ mail: email });
            await newSubscriber.save();
            return NextResponse.json({ success: true, message: "E-mail zapisany pomyślnie." }, { status: 201 });
        }

        if (subject && content) {
            // Wysłanie newslettera
            const allEmails = await NewsletterModel.find().select("mail -_id");
            const recipients = allEmails.map(entry => entry.mail);

            for (const recipient of recipients) {
                await sendEmail(recipient, subject, content);
            }

            return NextResponse.json({ success: true, message: "Newsletter wysłany pomyślnie." });
        }

        return NextResponse.json({ success: false, message: "Brak wymaganych danych." }, { status: 400 });
    } catch (error) {
        console.error("Error in POST /api/newsletter:", error);
        return NextResponse.json({ success: false, message: "Wystąpił błąd, spróbuj ponownie." }, { status: 500 });
    }
}
