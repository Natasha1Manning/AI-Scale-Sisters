import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Use the custom environment variable names from Vercel
    const apiKey = process.env.RESEND_API_KEY_EMAILS_OUTPUT
    const fromEmail = process.env.FROM_EMAILOUTPUT_FORM
    const adminEmail = process.env.ADMIN_EMAIL_OUTPUT
    const replyToEmail = process.env.REPLY_TO_EMAIL_OUTPUT
    const siteUrl = process.env.SITE_URL_OUTPUT

    console.log("🧪 Testing email with custom environment variables...")
    console.log("📧 Sending test email to:", email)

    if (!email) {
      return NextResponse.json({ error: "Email address is required" }, { status: 400 })
    }

    if (!apiKey || !fromEmail) {
      console.error("❌ Missing required environment variables")
      console.log("Environment check:", {
        hasApiKey: !!apiKey,
        hasFromEmail: !!fromEmail,
        hasAdminEmail: !!adminEmail,
        hasReplyToEmail: !!replyToEmail,
        hasSiteUrl: !!siteUrl,
      })
      return NextResponse.json({ error: "Email service not configured properly" }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const result = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "✅ Test Email - AI UP-SCALE Sisters Email System",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Test Email Success</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
              background-color: #f0fdf4; 
            }
            .container { 
              background: white; 
              border-radius: 16px; 
              overflow: hidden; 
              box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
            }
            .header { 
              background: linear-gradient(135deg, #10b981, #059669); 
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
            }
            .content { 
              padding: 30px; 
            }
            .success-badge { 
              display: inline-block; 
              background: #dcfce7; 
              color: #166534; 
              padding: 8px 16px; 
              border-radius: 20px; 
              font-weight: 600; 
              margin: 10px 0; 
            }
            .info-box { 
              background: #f8fafc; 
              border-radius: 8px; 
              padding: 20px; 
              margin: 20px 0; 
              border-left: 4px solid #10b981; 
            }
            .footer { 
              background: #f8fafc; 
              padding: 20px; 
              text-align: center; 
              font-size: 14px; 
              color: #6b7280; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">✅ Email System Test Successful!</h1>
              <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px;">AI UP-SCALE Sisters</p>
            </div>
            
            <div class="content">
              <div class="success-badge">🎉 Configuration Working Perfectly</div>
              
              <p>Congratulations! Your email system is properly configured and working correctly.</p>
              
              <div class="info-box">
                <h3 style="color: #059669; margin-top: 0;">✅ What This Confirms:</h3>
                <ul style="color: #374151; line-height: 1.8;">
                  <li><strong>Resend API:</strong> Connected and functional</li>
                  <li><strong>Custom Environment Variables:</strong> Properly configured</li>
                  <li><strong>Email Delivery:</strong> Working correctly</li>
                  <li><strong>Domain Authentication:</strong> Verified</li>
                </ul>
              </div>
              
              <div class="info-box">
                <h3 style="color: #059669; margin-top: 0;">🚀 Next Steps:</h3>
                <ol style="color: #374151; line-height: 1.8;">
                  <li>Your automation plan form is ready to collect leads</li>
                  <li>Test the full form at <strong>/automation-plan</strong></li>
                  <li>Start promoting your AI UP-SCALE Sisters platform</li>
                  <li>Monitor your admin email for new lead notifications</li>
                </ol>
              </div>
              
              <p>Your AI UP-SCALE Sisters platform is now fully operational! 🌟</p>
              
              <p>Best regards,<br>
              <strong>Your AI UP-SCALE Sisters System</strong><br>
              <a href="mailto:${replyToEmail}" style="color: #10b981;">${replyToEmail}</a></p>
            </div>
            
            <div class="footer">
              <p><strong>Built by a Sister, for All my Sisters 💜</strong></p>
              <p><a href="${siteUrl}" style="color: #10b981;">AI UP-SCALE Sisters</a> | Custom AI Automations & Private Agents</p>
              <p style="font-size: 12px; margin-top: 10px;">
                Test completed: ${new Date().toLocaleString()}<br>
                Environment: Custom Vercel Variables
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: replyToEmail,
    })

    console.log("✅ Test email sent successfully:", result.data?.id)

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully!",
      emailId: result.data?.id,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("❌ Test email error:", error)

    return NextResponse.json(
      {
        error: "Failed to send test email",
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
