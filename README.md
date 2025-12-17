# ✨ genify.ai — AI Content Generator SaaS ✨

<img width="1345" height="596" alt="image" src="https://github.com/user-attachments/assets/6aa3c7c5-4d81-43f2-992b-069decc85265" />

## 🚀 Project Overview

**genify.ai** is a complete **AI Content Generator SaaS platform** where users can sign up, choose from **10+ content templates**, and generate high-quality content in seconds.

The platform includes **authentication, subscriptions, real-time credit tracking, and content history**, making it fully production-ready.

## ✨ Key Highlights

- 🤖 AI-powered content generation
- 🧩 10+ ready-to-use content templates
- 🔐 Secure authentication with **Clerk**
- ⚡ Real-time credit usage tracking
- 📝 Rich text editor for generated content
- 📜 Content history
- 🎨 Modern, responsive UI with Tailwind & Shadcn

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**

### Backend & Database
- **PostgreSQL**
- **Drizzle ORM**
- **Neon Database**


## Setup Instructions 💻

### 1. Clone the repository

```shell
git clone https://github.com/ShivaKrishna-07/genify.ai.git
cd genify.ai
```

### 2. Install Dependencies

```shell
npm install
```

### 3. Setup .env file

```js
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# AI Configuration
NEXT_PUBLIC_GEMINI_API_KEY=...

# Database (PostgreSQL - Neon + Drizzle)
NEXT_PUBLIC_DRIZZLE_DB_URL=...

# Environment
NODE_ENV=development
```

### 4. Build the App 🔨

```shell
npm run build
```

### 5. Start the App 🚀

```shell
npm start
```

