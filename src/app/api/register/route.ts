import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

let users: any[] = []; // Zamiast bazy danych
let verificationCodes: { [key: string]: number } = {}; // Tymczasowe przechowywanie kodów

// Konfiguracja nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail", // Użyj odpowiedniego serwisu, np. Gmail
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(request: Request) {
    const { email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
        id: uuidv4(),
        email,
        password: hashedPassword,
        verified: false,
    };
    users.push(user);

    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    verificationCodes[email] = verificationCode;

    console.log(
        `Generated verification code: ${verificationCode} for email: ${email}`
    );

    // Wysyłanie maila z kodem weryfikacyjnym
    const mailOptions = {
        from: "your-email@gmail.com",
        to: email,
        subject: "Your Verification Code",
        text: `Your verification code is: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, code: verificationCode }); // Dodajemy kod do odpowiedzi (do celów debugowania)
}
