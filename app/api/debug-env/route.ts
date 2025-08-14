import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check all environment variables
    const envCheck = {
      RESEND_API_KEY_EMAILS_OUTPUT: {
        exists: !!process.env.RESEND_API_KEY_EMAILS_OUTPUT,
        prefix: process.env.RESEND_API_KEY_EMAILS_OUTPUT?.substring(0, 10) + "...",
        length: process.env.RESEND_API_KEY_EMAILS_OUTPUT?.length || 0,
      },
      FROM_EMAILOUTPUT_FORM: {
        exists: !!process.env.FROM_EMAILOUTPUT_FORM,
        value: process.env.FROM_EMAILOUTPUT_FORM,
      },
      ADMIN_EMAIL_OUTPUT: {
        exists: !!process.env.ADMIN_EMAIL_OUTPUT,
        value: process.env.ADMIN_EMAIL_OUTPUT,
      },
      REPLY_TO_EMAIL_OUTPUT: {
        exists: !!process.env.REPLY_TO_EMAIL_OUTPUT,
        value: process.env.REPLY_TO_EMAIL_OUTPUT,
      },
      SITE_URL_OUTPUT: {
        exists: !!process.env.SITE_URL_OUTPUT,
        value: process.env.SITE_URL_OUTPUT,
      },
    }

    console.log("🔍 Environment Variables Debug:", envCheck)

    return NextResponse.json({
      success: true,
      environment: envCheck,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("❌ Debug error:", error)
    return NextResponse.json(
      {
        error: "Debug failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
