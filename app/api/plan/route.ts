import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Use the custom environment variable names from Vercel
    const apiKey = process.env.RESEND_API_KEY_EMAILS_OUTPUT
    const fromEmail = process.env.FROM_EMAILOUTPUT_FORM
    const adminEmail = process.env.ADMIN_EMAIL_OUTPUT
    const replyToEmail = process.env.REPLY_TO_EMAIL_OUTPUT
    const siteUrl = process.env.SITE_URL_OUTPUT

    console.log("📧 Processing automation plan request...")
    console.log("📋 Form data received:", {
      name: formData.name,
      email: formData.email,
      businessType: formData.businessType,
      hasStack: !!formData.stack,
    })

    console.log("🔧 Environment variables check:", {
      hasApiKey: !!apiKey,
      apiKeyPrefix: apiKey?.substring(0, 10) + "...",
      fromEmail: fromEmail,
      adminEmail: adminEmail,
      replyToEmail: replyToEmail,
      siteUrl: siteUrl,
    })

    // Check for honeypot (spam protection)
    if (formData.website) {
      console.log("🛡️ Honeypot triggered - potential spam")
      return NextResponse.json({ success: true, message: "Thank you for your submission!" })
    }

    // Validate required fields
    if (!formData.email) {
      console.error("❌ Missing email field")
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    if (!formData.businessType) {
      console.error("❌ Missing businessType field")
      return NextResponse.json({ error: "Business type is required" }, { status: 400 })
    }

    if (!apiKey || !fromEmail || !adminEmail) {
      console.error("❌ Missing environment variables:", {
        hasApiKey: !!apiKey,
        hasFromEmail: !!fromEmail,
        hasAdminEmail: !!adminEmail,
      })
      return NextResponse.json({ error: "Email service configuration error" }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    // Generate personalized recommendations based on form data
    const generateRecommendations = (data: any) => {
      const recommendations = []

      console.log("🎯 Generating recommendations for business type:", data.businessType)

      // Business type specific recommendations
      if (data.businessType === "e-commerce") {
        recommendations.push("🛒 **Shopify AI** - Product recommendations and inventory optimization")
        recommendations.push("📧 **Klaviyo AI** - Personalized email marketing for online stores")
        recommendations.push("💬 **Gorgias AI** - AI-powered customer service for e-commerce")
      } else if (data.businessType === "consulting") {
        recommendations.push("📋 **Notion AI** - Smart project management and client documentation")
        recommendations.push("🎥 **Loom AI** - Automated video summaries for client presentations")
        recommendations.push("📅 **Calendly AI** - Smart scheduling that learns your preferences")
      } else if (data.businessType === "creative-services") {
        recommendations.push("🎨 **Adobe AI** - Automated design suggestions and photo editing")
        recommendations.push("✨ **Figma AI** - Smart design system management")
        recommendations.push("📝 **Jasper AI** - Generate creative briefs and project descriptions")
      } else if (data.businessType === "coaching") {
        recommendations.push("📚 **Teachable AI** - Automated course creation and student engagement")
        recommendations.push("💬 **Zoom AI** - Meeting summaries and action item extraction")
        recommendations.push("📊 **Typeform AI** - Smart forms that adapt to responses")
      } else if (data.businessType === "health-wellness") {
        recommendations.push("📱 **MyFitnessPal AI** - Personalized nutrition and wellness tracking")
        recommendations.push("🧘 **Headspace AI** - AI-powered meditation and wellness programs")
        recommendations.push("📊 **Fitbit AI** - Health data analysis and personalized insights")
      } else if (data.businessType === "education") {
        recommendations.push("📚 **Khan Academy AI** - Personalized learning paths and assessments")
        recommendations.push("🎓 **Coursera AI** - AI-powered course recommendations and progress tracking")
        recommendations.push("📝 **Grammarly AI** - Writing assistance for educational content")
      } else {
        // Default for service-based or other
        recommendations.push("🤖 **ChatGPT Plus** - Your AI assistant for brainstorming and problem-solving")
        recommendations.push("✍️ **Grammarly AI** - Professional writing assistance for all communications")
        recommendations.push("📅 **Calendly** - Streamline your appointment scheduling")
        recommendations.push("⚡ **Zapier** - Connect your apps and automate workflows")
        recommendations.push("🎨 **Canva AI** - Create professional graphics and social media posts")
      }

      // Add some general recommendations
      recommendations.push("📋 **Notion AI** - Smart note-taking and project management")
      recommendations.push("📧 **Mailchimp AI** - Smart email campaigns that convert leads")

      console.log("✅ Generated", recommendations.length, "recommendations")
      return [...new Set(recommendations)].slice(0, 6) // Remove duplicates and limit to 6
    }

    const personalizedRecommendations = generateRecommendations(formData)

    console.log("📧 Attempting to send user email...")

    // Send email to user
    const userEmailResult = await resend.emails.send({
      from: fromEmail,
      to: formData.email,
      subject: "✨ Your Personalised AI Automation Plan - AI UP-SCALE Sisters",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Your Personalised AI Plan</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
              background-color: #fdf2f8; 
            }
            .container { 
              background: white; 
              border-radius: 16px; 
              overflow: hidden; 
              box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
            }
            .header { 
              background: linear-gradient(135deg, #ec4899, #8b5cf6); 
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
            }
            .content { 
              padding: 30px; 
            }
            .recommendation { 
              background: #f1f5f9; 
              padding: 20px; 
              border-radius: 12px; 
              margin: 15px 0; 
              border-left: 4px solid #8b5cf6; 
            }
            .cta { 
              background: linear-gradient(135deg, #ec4899, #8b5cf6); 
              color: white; 
              padding: 15px 30px; 
              border-radius: 8px; 
              text-decoration: none; 
              display: inline-block; 
              margin: 20px 0; 
              font-weight: bold; 
            }
            .footer { 
              background: #f8fafc; 
              padding: 20px; 
              text-align: center; 
              font-size: 14px; 
              color: #6b7280; 
            }
            .highlight { 
              background: #fef3c7; 
              padding: 2px 6px; 
              border-radius: 4px; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">✨ Your Personalised AI Plan</h1>
              <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px;">Tailored for your ${formData.businessType} business</p>
            </div>
            
            <div class="content">
              <p>Hi ${formData.name || "there"}! 👋</p>
              
              <p>Thank you for taking the time to share your business details with us. Based on your responses, I've created a <span class="highlight">personalised AI automation plan</span> specifically for your ${formData.businessType} business.</p>
              
              <h2 style="color: #8b5cf6; margin-top: 30px;">🎯 Your AI Tool Recommendations:</h2>
              
              ${personalizedRecommendations.map((rec) => `<div class="recommendation">${rec}</div>`).join("")}
              
              <h2 style="color: #8b5cf6; margin-top: 30px;">🚀 Implementation Roadmap:</h2>
              <ol style="padding-left: 20px; color: #374151; line-height: 1.8;">
                <li><strong>Week 1-2:</strong> Start with 1-2 tools that address your biggest pain points</li>
                <li><strong>Week 3-4:</strong> Set up free trials and test which tools work best for you</li>
                <li><strong>Month 2:</strong> Gradually integrate more tools as you get comfortable with automation</li>
                <li><strong>Month 3+:</strong> Track your time savings and productivity improvements</li>
              </ol>
              
              <div style="background: #ecfdf5; border-radius: 12px; padding: 20px; margin: 25px 0;">
                <h3 style="color: #059669; margin-top: 0;">💡 Want Custom AI Automations?</h3>
                <p style="color: #374151; line-height: 1.6; margin-bottom: 15px;">
                  Ready to take it to the next level? I can build custom AI automations and private agents specifically for your business - saving you hours while keeping your unique magic ✨
                </p>
                <div style="text-align: center;">
                  <a href="${siteUrl || "https://aiupscalesisters.com"}/services" class="cta">
                    Get My Custom Automation Plan
                  </a>
                </div>
              </div>
              
              <div style="background: #e0f2fe; padding: 20px; border-radius: 12px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #0277bd;">🌟 Why This Matters:</h3>
                <p style="margin-bottom: 0; color: #374151;">These automations aren't just about saving time—they're about <strong>scaling your impact</strong>. When you automate the right processes, you free yourself to focus on what you do best: growing your business and serving your clients at the highest level.</p>
              </div>
              
              <div style="background: #fef3c7; padding: 20px; border-radius: 12px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #92400e;">📞 Questions? I'm Here to Help!</h3>
                <p style="margin-bottom: 0; color: #92400e;">Simply reply to this email with any questions about implementing these tools. I read every message personally and love helping fellow entrepreneurs succeed! 💜</p>
              </div>
              
              <p>I'm excited to help you implement these solutions and watch your business transform! 🚀</p>
              
              <p>Best regards,<br>
              <strong>Natasha Manning</strong><br>
              <em>AI UP-SCALE Sisters</em><br>
              <a href="mailto:${replyToEmail}" style="color: #8b5cf6;">${replyToEmail}</a></p>
            </div>
            
            <div class="footer">
              <p><strong>Built by a Sister, for All my Sisters 💜</strong></p>
              <p><a href="${siteUrl || "https://aiupscalesisters.com"}" style="color: #8b5cf6;">AI UP-SCALE Sisters</a> | Custom AI Automations & Private Agents</p>
              <p style="font-size: 12px; margin-top: 15px;">This plan was generated based on your specific business needs and goals. Every recommendation is tailored to help you succeed.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: replyToEmail,
    })

    console.log("✅ User email sent successfully:", userEmailResult.data?.id)

    console.log("📧 Attempting to send admin notification...")

    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `🎉 New Automation Plan Request - ${formData.name || formData.email}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Plan Request</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
            }
            .header { 
              background: linear-gradient(135deg, #ec4899, #8b5cf6); 
              color: white; 
              padding: 20px; 
              border-radius: 12px; 
              text-align: center; 
              margin-bottom: 20px; 
            }
            .content { 
              background: #f9fafb; 
              padding: 20px; 
              border-radius: 12px; 
              border: 1px solid #e5e7eb; 
            }
            .field { 
              margin: 15px 0; 
              padding: 15px; 
              background: white; 
              border-radius: 8px; 
              border-left: 4px solid #8b5cf6; 
            }
            .label { 
              font-weight: bold; 
              color: #8b5cf6; 
              margin-bottom: 5px; 
            }
            .value { 
              color: #374151; 
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🚨 New Automation Plan Request</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">AI UP-SCALE Sisters</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${formData.email}" style="color: #8b5cf6;">${formData.email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${formData.name || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">Business Type:</div>
              <div class="value">${formData.businessType}</div>
            </div>
            
            <div class="field">
              <div class="label">Tool Stack:</div>
              <div class="value">${formData.stack || "Not specified"}</div>
            </div>
            
            <div style="margin-top: 25px; padding: 20px; background: #fef3c7; border-radius: 8px;">
              <h3 style="margin-top: 0; color: #92400e;">📋 Recommendations Sent:</h3>
              <div style="line-height: 1.6; color: #92400e;">
                ${personalizedRecommendations.map((rec) => `<div style="margin: 8px 0;">${rec}</div>`).join("")}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
              <strong style="color: #1e40af;">Quick Actions:</strong><br>
              <a href="mailto:${formData.email}?subject=Re: Your AI Automation Plan&body=Hi ${formData.name || "there"}, thank you for your interest in AI automation. I'd love to discuss your specific needs further..." style="color: #1d4ed8;">Reply to ${formData.name || formData.email}</a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              Submitted: ${new Date().toLocaleString()}<br>
              From: ${siteUrl || "https://aiupscalesisters.com"}<br>
              User Agent: ${request.headers.get("user-agent")?.substring(0, 100) || "Unknown"}
            </p>
          </div>
        </body>
        </html>
      `,
      replyTo: formData.email,
    })

    console.log("✅ Admin email sent successfully:", adminEmailResult.data?.id)

    console.log("🎉 All emails sent successfully!")

    return NextResponse.json({
      success: true,
      message:
        "Your personalised AI plan has been sent to your email! Check your inbox (and spam folder) in the next few minutes. ✨",
      userEmailId: userEmailResult.data?.id,
      adminEmailId: adminEmailResult.data?.id,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("❌ Email sending error:", error)

    // Log detailed error information
    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    return NextResponse.json(
      {
        error: "Failed to send automation plan. Please try again or contact support.",
        details: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
