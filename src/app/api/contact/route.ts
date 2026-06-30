import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const { name, email, phone, subject, message } = validatedData;

    const { data, error } = await resend.emails.send({
      from: "Harry Real Estate <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "leads@harryrealestate.com"],
      replyTo: email,
      subject: `New Lead: ${subject} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      // In a real scenario, we might still want to return 200 if we log the lead to a DB
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
