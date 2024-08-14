import { EmailTemplate } from "@/components/sender/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

interface PostRequestBody {
  leaderName: string;
  email: string;
  abstractUrl: string;
  descriptionUrl: string;
  studentIdUrl: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: PostRequestBody = await req.json();

    const { leaderName, email, abstractUrl, descriptionUrl, studentIdUrl } = body;

    const { data, error } = await resend.emails.send({
      from: "Overlogic Universe <overlogic@ums-iid.com>",
      to: [email],
      subject: "Payment Verification",
      react: EmailTemplate({
        leaderName: leaderName,
        email: email,
        abstractUrl: abstractUrl,
        descriptionUrl: descriptionUrl,
        studentIdUrl: studentIdUrl,
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
