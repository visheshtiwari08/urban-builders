import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, message } = await req.json();

    if (!name || !phone || !message) {
      return Response.json(
        { ok: false, error: "Name, phone and message are required." },
        { status: 400 }
      );
    }

    const to = process.env.LEAD_TO_EMAIL;
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!to || !host || !user || !pass) {
      return Response.json(
        { ok: false, error: "Email config missing in .env.local" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `New Lead: ${name} (${phone})`;
    const text = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      service ? `Service: ${service}` : "",
      `Message: ${message}`,
      `Time: ${new Date().toLocaleString()}`,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: `"Urban Builders Website" <${user}>`,
      to,
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
