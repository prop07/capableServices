import ContactEmailTemplate from "@/emails"; // Ensure this path is correct
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request) {
    try {
        const { firstName, email, phone, address, serviceType, date, message } = await request.json();
        const { data, error } = await resend.emails.send({
            from: 'Capable HVAC <info@capablehvac.com>',
            to: email,
            subject: 'HVAC Request Confirmed',
            bcc: "capableservicehvac@gmail.com",
            reply_to: "capableservicehvac@gmail.com",
            react: ContactEmailTemplate({ firstName, phone, address, serviceType, date, message, email }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }
        return Response.json({ data }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}

