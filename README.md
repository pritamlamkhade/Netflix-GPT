# 🎥 Netflix-GPT

**Netflix-GPT** is a modern streaming platform UI clone built with **React**, powered by **TMDB** for movie data and **OpenAI GPT** for intelligent search suggestions. It features authentication using **Firebase**, a responsive UI with **TailwindCSS**, and supports multiple languages using **react-i18next**.

🚀 **Live Demo**: [https://netflixgpt-1fe73.web.app/](https://netflixgpt-1fe73.web.app/)

---

## ✨ Features

### 🔐 Authentication

- Firebase Email & Password Auth (Sign Up / Sign In)
- User state management with Redux
- Sign out functionality
- Profile updates
- Auth state persistence using `onAuthStateChanged`

### 🎥 Browse Page

- Movie trailer autoplay background (YouTube embed)
- Dynamic movie categories:
  - Now Playing
  - Top Rated
  - Popular
  - Upcoming
- Movie list & cards (with poster, title)
- Responsive design with TailwindCSS

### 🧠 GPT Movie Suggestions

- GPT-3.5 Turbo integration using OpenAI API
- Smart movie recommendations based on user search queries
- Seamless UI switching between GPT and traditional browse view

### 🌐 Internationalization (i18n)

- Multi-language support using `react-i18next`
- Current support: English, Hindi, Marathi
- Translatable static content on Auth and Browse pages

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **Redux Toolkit**
- **React Router**
- **Firebase Auth**
- **TMDB API**
- **OpenAI GPT-3.5**
- **react-i18next** (i18n)

---

## 📁 Project Structure Highlights

- `components/` – Shared UI elements (e.g., Header, LanguageSelector)
- `auth/` – Firebase auth logic, Redux user slice
- `features/` – Feature-specific folders (e.g., GPT Suggest, Movies)
- `constants/` – Reusable constants like API config, routes
- `hooks/` – Custom React hooks for fetching TMDB data

---

## 🧐 Implemented Features (Detailed)

- ✅ React project setup using CRA
- ✅ TailwindCSS config and styling
- ✅ Auth pages (Login / SignUp) with validation
- ✅ Firebase integration for authentication
- ✅ Protected Routes & Public Routes separation
- ✅ Redux store setup for user and movie states
- ✅ Fetch movie list and trailers from TMDB API
- ✅ Embed YouTube video trailer with autoplay and mute
- ✅ GPT Search suggestions using OpenAI
- ✅ Multilingual UI with react-i18next
- ✅ Modular folder structure and code refactoring
- ✅ Responsive UI for desktop and mobile

---

## 📌 How to Use

1. **Clone the repo**

   ```bash
   git clone https://github.com/pritamlamkhade/Netflix-GPT.git
   cd Netflix-Gpt
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup **``** file**

   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_TMDB_TOKEN=your_tmdb_access_token
   REACT_APP_OPENAI_KEY=your_openai_api_key
   ```

4. **Run the app**

   ```bash
   npm start
   ```

---

## 📄 License

This project is for educational purposes. It is not affiliated with or endorsed by Netflix.
