import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/nodemailer';
import { NEWSLETTER_LIST } from '../../../constants/newsletter';

export async function POST(request: Request) {
    const { subject, content, emailList } = await request.json();

    if (!subject || !content) {
        return NextResponse.json({ success: false, message: 'Subject and content are required' }, { status: 400 });
    }

    // Użyj domyślnej listy e-maili, jeśli emailList jest pusty
    const recipients = emailList && emailList.length > 0 ? emailList : NEWSLETTER_LIST.map(entry => entry.mail);

    try {
        for (const email of recipients) {
            await sendEmail(email, subject, content);
        }
        return NextResponse.json({ success: true, message: 'Newsletter sent successfully!' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to send newsletter' }, { status: 500 });
    }
}
