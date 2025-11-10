# 🌎 Immigo

Immigo is a **React + Vite** web application designed to help immigrants in the United States understand and access their **rights**, **resources**, and **legal information** — regardless of language or documentation status.

This app empowers users to:
- Learn about their rights as **documented or undocumented** immigrants.
- Access reliable **legal and community resources**.
- Use a built-in **AI assistant** to ask questions about immigration laws, forms, and protection options.
- Switch between **multiple languages** for accessibility and inclusion.

---

## 🧠 Features

- 🗣️ **Multilingual Support** — switch between languages (e.g., English, Spanish, French, Arabic, Mandarin, etc.)
- 🤖 **AI Chatbot Assistant** — answers immigration-related questions using OpenAI API.
- 📜 **Know Your Rights** section — simplified breakdown of immigrant rights and protections.
- 🧾 **Paperwork Help** — guides users through common immigration forms and applications.
- 🧭 **Resource Finder** — local organizations, hotlines, and free legal aid.
- 💡 **Simple and Accessible UI** — clean design for all users, mobile-friendly.

---

## 🏗️ Tech Stack

| Category | Tools |
|-----------|-------|
| **Frontend Framework** | React 18 + Vite |
| **Styling** | CSS3 |
| **Language Support** | i18next |
| **AI Assistant** | OpenAI API |
| **Version Control** | Git & GitHub |
| **Environment Variables** | `.env` file with `VITE_GEMINI_API_KEY` |

---

## 🧩 Folder Structure

Immigo/
│
├── public/ # Static assets
│ └── favicon.ico
│
├── src/
│ ├── assets/ # Images and icons
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── LanguageSwitcher.jsx
│ │ └── Chatbot.jsx
│ │
│ ├── pages/ # Main app pages
│ │ ├── Home.jsx
│ │ ├── Rights.jsx
│ │ ├── Resources.jsx
│ │ ├── Help.jsx
│ │ └── About.jsx
│ │
│ ├── styles/ # CSS files
│ │ ├── App.css
│ │ ├── Navbar.css
│ │ └── Chatbot.css
│ │
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry file for React + Vite
│ └── i18n.js # Language configuration
│
├── .env # Contains your API key (VITE_GEMINI_API_KEY)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key (for chatbot functionality)

### Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd Immigo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory
   - Add your OpenAI API key:
     ```
     VITE_GEMINI_API_KEY=your_openai_api_key_here
     ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📝 Notes

- The chatbot requires a valid OpenAI API key to function
- Language support is currently available in English, Spanish, and French
- All information provided is for educational purposes only and does not constitute legal advice