import { CompetitionEmailTemplate } from "@/components/sender/CompetitionEmailTemplate";
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

    const { name, email } = body;

    const { data, error } = await resend.emails.send({
      from: "UMS International Innovation Day <umsinnovationday@ums-iid.com>",
      to: [email],
      subject:
        "Thank You for Registering for UMS International Innovation Day 2024!",
      react: CompetitionEmailTemplate({
        name,
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
