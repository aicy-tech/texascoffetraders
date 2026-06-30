import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, subject, message } = validatedData;

    const { data, error } = await resend.emails.send({
      from: "Texas Coffee Traders <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "info@texascoffeetraders.com"],
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
