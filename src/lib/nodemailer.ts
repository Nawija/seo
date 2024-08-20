import nodemailer from "nodemailer";

export async function sendEmail(to: string, subject: string, content: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail", // Lub inny serwis, np. SMTP
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text: content,
    };

    await transporter.sendMail(mailOptions);
}
