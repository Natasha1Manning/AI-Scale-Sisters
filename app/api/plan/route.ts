import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

// Initialize Resend with error handling
let resend: Resend | null = null
try {
  if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
} catch (error) {
  console.error("Failed to initialize Resend:", error)
}

// Simple validation without external dependencies
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateInput(data: any) {
  if (!data.name || typeof data.name !== "string" || data.name.length < 2) {
    return { valid: false, error: "Name must be at least 2 characters" }
  }
  if (!data.email || !validateEmail(data.email)) {
    return { valid: false, error: "Valid email is required" }
  }
  if (!data.drain || typeof data.drain !== "string" || data.drain.length < 3) {
    return { valid: false, error: "Please select what drains your time most" }
  }
  if (!data.stack || typeof data.stack !== "string" || data.stack.length < 2) {
    return { valid: false, error: "Please describe your tool stack" }
  }
  return { valid: true }
}

function generatePlan(name: string, drain: string, stack: string) {
  const ideas: Record<string, string[]> = {
    "Inbox & Email Replies": [
      "Gmail triage: labels + tone-matched drafts via a private agent",
      'Auto-summaries to Notion + daily "Need-to-Reply" digest',
      "Booking links injected for qualified leads",
    ],
    "Leads & DMs / Follow-ups": [
      "DM lead-qualifier that books calls and logs to CRM",
      "3-step follow-up sequence that sounds like you",
      "Daily pipeline snapshot to your inbox/Slack",
    ],
    "Content Repurposing": [
      "Video → post/email/carousel drafts in your voice",
      "Auto-captioning & thumbnail suggestions",
      "Publish queue synced to Notion/Buffer",
    ],
    "Ops/Admin & CRM Hygiene": [
      "Auto-tag, notes, and tasks from calls/emails",
      "Weekly ops digest: blockers, due dates, owners",
      "Airtable/Notion sync with dedupe guardrails",
    ],
    "Customer Support / FAQs": [
      "Care agent that answers FAQs, escalates edge cases",
      "Order status & refund triage for Shopify",
      "Satisfaction pings + review requests",
    ],
    "Research & Briefs": [
      "Source-cited research briefs in your template",
      "Competitor/news watch with weekly summary",
      "Idea bank ranked by effort vs impact",
    ],
  }
  const picks = ideas[drain] ?? ideas["Ops/Admin & CRM Hygiene"]
  const first = name.split(" ")[0]

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your Automation Plan</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px; }
    .content { background: #f9fafb; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb; }
    .automation-list { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
    .automation-list li { margin: 8px 0; }
    .next-steps { background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 20px; }
    .footer { text-align: center; margin-top: 20px; font-size: 14px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 24px;">Your 1-Page Automation Plan ✨</h1>
    <p style="margin: 10px 0 0; opacity: 0.9;">Custom AI automations for ${first}</p>
  </div>
  
  <div class="content">
    <p>Hi ${first}! 👋</p>
    <p>Here's a lightweight automation plan tailored to your focus area: <strong>${drain}</strong> and your tech stack: <strong>${stack}</strong>.</p>
    
    <div class="automation-list">
      <h3 style="margin-top: 0; color: #8b5cf6;">🤖 Your Custom Automation Ideas:</h3>
      <ol>
        <li><strong>${picks[0]}</strong></li>
        <li><strong>${picks[1]}</strong></li>
        <li><strong>${picks[2]}</strong></li>
      </ol>
    </div>
    
    <div class="next-steps">
      <h3 style="margin-top: 0; color: #f59e0b;">🚀 Next Steps (Free):</h3>
      <p>15-minute fit call → we map 2–3 automations, pick the smallest build with the biggest win.</p>
      <p><strong>Ready to chat?</strong> Simply reply to this email or connect with me on <a href="https://www.linkedin.com/in/natasha-manning-7bb914205/" style="color: #8b5cf6;">LinkedIn</a>.</p>
    </div>
    
    <p>No pressure, no jargon. We'll suggest the smallest build that makes the biggest difference.</p>
    
    <p>Best,<br>
    <strong>Natasha Manning</strong><br>
    <em>AI UP-SCALE Sisters</em></p>
  </div>
  
  <div class="footer">
    <p>Built by a Sister, for All my Sisters 💜</p>
    <p><a href="https://www.aiupscalesisters.com" style="color: #8b5cf6;">AI UP-SCALE Sisters</a> | Custom AI Automations & Private Agents</p>
  </div>
</body>
</html>
`
}

export async function POST(req: Request) {
  console.log("API route called")

  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured")
      return new NextResponse("Email service not configured", { status: 500 })
    }

    if (!resend) {
      console.error("Resend not initialized")
      return new NextResponse("Email service initialization failed", { status: 500 })
    }

    const body = await req.json()
    console.log("Request body:", body)

    const validation = validateInput(body)
    if (!validation.valid) {
      console.error("Validation failed:", validation.error)
      return new NextResponse(validation.error, { status: 400 })
    }

    // Honeypot spam protection
    if (body.hp) {
      console.log("Honeypot triggered, returning silent success")
      return NextResponse.json({ ok: true })
    }

    const { name, email, drain, stack } = body
    const html = generatePlan(name, drain, stack)

    console.log("Sending email to:", email)

    // Send personalized plan to user
    const userEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || "AI Up-Scale Sisters <hello@aiupscalesisters.com>",
      to: email,
      reply_to: "natasha.manning@riseandthrivefamilies.com",
      subject: `${name.split(" ")[0]}, your custom automation plan is ready ✨`,
      html,
    })

    console.log("User email sent:", userEmailResult)

    // Send admin notification if configured
    if (process.env.ADMIN_EMAIL) {
      console.log("Sending admin notification to:", process.env.ADMIN_EMAIL)

      const adminEmailResult = await resend.emails.send({
        from: process.env.FROM_EMAIL || "AI Up-Scale Sisters <hello@aiupscalesisters.com>",
        to: process.env.ADMIN_EMAIL,
        subject: `🎯 New Automation Plan Request: ${name} <${email}>`,
        html: `
          <h2>New Automation Plan Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time Drain:</strong> ${drain}</p>
          <p><strong>Tool Stack:</strong> ${stack}</p>
          <hr>
          <h3>Plan Sent:</h3>
          ${html}
        `,
      })

      console.log("Admin email sent:", adminEmailResult)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Detailed error:", error)
    return new NextResponse(`Server error: ${error instanceof Error ? error.message : "Unknown error"}`, {
      status: 500,
    })
  }
}
