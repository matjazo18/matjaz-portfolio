import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req) {
  const body = await req.json();
  console.log(body);

  const mailgun = new Mailgun(FormData);
  console.log(mailgun);
  const mg = mailgun.client({
    username: "api",
    key: process.env.Email_api,
  });
  try {
    const result = await mg.messages.create(
      "sandboxabedcaf99e6e42afada65872c567ccb6.mailgun.org",
      {
        from: "Mailgun Sandbox <postmaster@sandboxabedcaf99e6e42afada65872c567ccb6.mailgun.org>",
        to: [body.to],
        subject: body.subject,
        text: body.text,
      }
    );
    console.log(result);
    return Response.json({ success: true, result });
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
//81a30007fed9bc3a824a2458a84cb3c1-67bd41c2-1e8b1525
