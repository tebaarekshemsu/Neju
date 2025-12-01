import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Get Telegram bot token and chat ID from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("[v0] Missing Telegram environment variables")
      return NextResponse.json({ error: "Telegram configuration missing" }, { status: 500 })
    }

    // Format the message
    const telegramMessage = `
📧 New Contact Form Submission

👤 Name: ${name}
📨 Email: ${email}
📌 Subject: ${subject}

💬 Message:
${message}
    `.trim()

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      console.error("[v0] Telegram API error:", await response.text())
      return NextResponse.json({ error: "Failed to send Telegram message" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error in send-telegram route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
