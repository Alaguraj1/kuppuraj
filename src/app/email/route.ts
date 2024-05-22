import { NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";

// Set SendGrid API Key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");

// Check if SendGrid API Key is set
// if (!process.env.SENDGRID_API_KEY) {
//   throw new Error("No SendGrid API Key found. Please set it in the environment.");
// }

export async function POST(request: Request) {
  try {
    // Parse JSON data from request body
    const data = await request.json();

    // Construct email message
    const msg = {
      to: process.env.EMAIL_TO || "", // Use default value if environment variable not set
      from: process.env.EMAIL_FROM || "", // Use default value if environment variable not set
      templateId: process.env.SENDGRID_TEMPLATE_ID || "", // Use default value if environment variable not set
      dynamicTemplateData: {
        name: data.name,
        orgname: data.orgname,
        email: data.email,
        topic: data.topic,
        query: data.query,
      },
    };

    // Send email
    // await sgMail.send(msg);

    // Respond with success message
    return new Response("Email sent successfully.", { status: 200 });
  } catch (error) {
    // Log and respond with error message
    console.error("Error sending email:", error);
    return new Response("Failed to send email.", { status: 500 });
  }
}
