import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log("🧪 Simple test starting...")
    console.log("📧 Test email address:", email)

    // Get environment variables
    const apiKey = process.env.RESEND_API_KEY_EMAILS_OUTPUT
    const fromEmail = process.env.FROM_EMAILOUTPUT_FORM

    console.log("🔧 Environment check:", {
      hasApiKey: !!apiKey,
      apiKeyLength: apiKey?.length || 0,
      apiKeyPrefix: apiKey?.substring(0, 10) + "...",
      fromEmail: fromEmail,
    })

    if (!apiKey) {
      console.error("❌ No API key found")
      return NextResponse.json({ error: "No API key configured" }, { status: 500 })
    }

    if (!fromEmail) {
      console.error("❌ No from email found")
      return NextResponse.json({ error: "No from email configured" }, { status: 500 })
    }

    if (!email) {
      return NextResponse.json({ error: "Email address required" }, { status: 400 })
    }

    console.log("🚀 Initializing Resend...")
    const resend = new Resend(apiKey)

    console.log("📧 Sending simple test email...")
    const result = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "🧪 Simple Test - AI UP-SCALE Sisters",
      html: `
        <h1>✅ Simple Test Successful!</h1>
        <p>This is a basic test email to verify the email system is working.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>From:</strong> ${fromEmail}</p>
        <p><strong>To:</strong> ${email}</p>
        <hr>
        <p><em>AI UP-SCALE Sisters Email System</em></p>
      `,
    })

    console.log("✅ Simple test email sent:", result.data?.id)

    return NextResponse.json({
      success: true,
      message: "Simple test email sent successfully!",
      emailId: result.data?.id,
      from: fromEmail,
      to: email,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("❌ Simple test error:", error)

    // Log detailed error information
    if (error instanceof Error) {
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack?.substring(0, 500),
      })
    }

    return NextResponse.json(
      {
        error: "Simple test failed",
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
