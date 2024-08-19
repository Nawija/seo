import { NextResponse } from "next/server";

let verificationCodes: { [key: string]: number } = {}; // Tymczasowe przechowywanie kodów

export async function POST(request: Request) {
    const { email, code } = await request.json();

    // Debugowanie
    console.log(`Received code: ${code} for email: ${email}`);

    // Konwersja kodu z maila i kodu wprowadzonego przez użytkownika na liczbę
    const storedCode = verificationCodes[email];
    const inputCode = parseInt(code, 10);

    console.log(`Stored code: ${storedCode}, Input code: ${inputCode}`);

    if (storedCode && storedCode === inputCode) {
        delete verificationCodes[email]; // Usunięcie kodu po jego użyciu
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({
            success: false,
            message: "Invalid verification code",
        });
    }
}
