# Neju - Web Development & Graphic Design Agency

A modern, mobile-first website for Neju, a professional web development and graphic design agency. Built with Next.js, React, and shadcn/ui.

## Features

- **Responsive Mobile-First Design** - Optimized for all screen sizes
- **Services Section** - Showcase all service offerings
- **Portfolio with Tabs** - Organized project showcase by category
- **Contact Form with Telegram Integration** - Direct message delivery to Telegram
- **Modern UI/UX** - Built with shadcn/ui components
- **SEO Optimized** - Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 16
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript

## Setup Instructions

### 1. Installation

Clone the project and install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 2. Setting Up Telegram Integration

To enable contact form messages to be sent to your Telegram account, follow these steps:

#### Step A: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Click **Start** and send the command `/newbot`
3. Follow the prompts:
   - Enter a name for your bot (e.g., "Neju Contact Form")
   - Enter a username for your bot (e.g., "neju_contact_bot")
4. Copy the **API Token** provided (looks like: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

#### Step B: Get Your Telegram Chat ID

1. Open Telegram and search for **@userinfobot**
2. Click **Start**
3. Your user ID will be displayed (looks like a number: `123456789`)
4. This is your **Chat ID**

#### Step C: Add Environment Variables

1. In your v0 workspace, go to the **Vars** section (left sidebar)
2. Add these two environment variables:
   - **Key**: `TELEGRAM_BOT_TOKEN`
     **Value**: `<paste your API token from Step A>`
   - **Key**: `TELEGRAM_CHAT_ID`
     **Value**: `<paste your Chat ID from Step B>`
3. Click **Save**

#### Step D: Test the Integration

1. Go to your website
2. Fill out the contact form and submit
3. Check your Telegram account - you should receive the message!

### 3. Running Locally

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx              # Main home page
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles and design tokens
│   └── api/
│       └── send-telegram/    # Telegram integration API route
├── components/
│   ├── navigation.tsx        # Header & navigation
│   ├── hero.tsx              # Hero section with CTA buttons
│   ├── services.tsx          # Services showcase
│   ├── portfolio.tsx         # Portfolio with tabs
│   ├── about.tsx             # About section
│   ├── contact.tsx           # Contact form
│   └── footer.tsx            # Footer
└── public/                   # Static assets
\`\`\`

## Customization

### Colors
Edit the design tokens in `app/globals.css`:
- `--primary`: Main brand color (dark blue)
- `--secondary`: Accent color (cyan)
- `--muted`: Background colors

### Content
Each component can be easily edited:
- **Hero**: Update headline and CTA text in `components/hero.tsx`
- **Services**: Add/remove services in `components/services.tsx`
- **Portfolio**: Modify projects in `components/portfolio.tsx`
- **Contact**: Change form fields in `components/contact.tsx`

### Logo
Replace the logo image in `components/navigation.tsx` and update the image path as needed.

## Deployment

Deploy your site to Vercel with one click:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add the environment variables in Vercel's dashboard
5. Deploy!

## Support

For issues or questions:
- Check that Telegram bot token and chat ID are correctly set in environment variables
- Ensure the contact form API route is accessible
- Test form submission to verify Telegram integration is working

## License

© 2025 Neju. All rights reserved.
