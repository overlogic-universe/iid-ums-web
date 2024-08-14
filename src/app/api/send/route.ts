import { EmailTemplate } from "@/components/sender/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

interface PostRequestBody {
  name: string;
  email: string;
  payment: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: PostRequestBody = await req.json();

    const { name, email, payment } = body;

    const { data, error } = await resend.emails.send({
      from: "Overlogic Universe <overlogic@ums-iid.com>",
      to: [email],
      subject: "Payment Verification",
      react: EmailTemplate({
        name,
        email,
        payment,
      }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
