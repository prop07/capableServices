import ContactEmailTemplate from "@/emails";
import { Resend } from "resend";

// Initialize the Resend instance with the API key
const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request) {
    try {
        // Parse the JSON request body
        const { firstName, email, phone, address, serviceType, date, message } = await request.json();
        // const emails = [email, "rijalmanoj07@gmail.com"],
        
        // Send the email using Resend
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ["rijalmanoj404@gmail.com"],
            subject: 'New HVAC Request',
            react: ContactEmailTemplate({ firstName, phone, address, serviceType, date, message,email }),
        });
        
        // Return a success response
        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Return an error response
        return new Response(JSON.stringify({ success: false, message: error.message || 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}