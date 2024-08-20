import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    const { email, password } = await request.json();

    // const user = users.find((user) => user.email === email);
    // if (!user) {
    //     return NextResponse.json({
    //         success: false,
    //         message: "Invalid credentials",
    //     });
    // }

    // const isPasswordCorrect = await bcrypt.compare(password, user.password);
    // if (!isPasswordCorrect) {
    //     return NextResponse.json({
    //         success: false,
    //         message: "Invalid credentials",
    //     });
    // }

    return NextResponse.json({ success: true });
}
