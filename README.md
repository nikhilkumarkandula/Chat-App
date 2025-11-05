# 💬 Chat Application

A full-stack **real-time chat application** built with **React.js**, **Zustand**, **Tailwind CSS**, **DaisyUI** on the frontend, and **Node.js**, **Express**, **MongoDB** on the backend.
Users can sign up, log in, send messages in real time, and update their profile images.

---

## 🌐 Live Demo
👉 [Visit the Live App](https://chat-app-3iha.onrender.com/login)

---

## 📂 Project Structure

```
chat-app/
│
├── frontend/   # React.js + Zustand + TailwindCSS + DaisyUI
│
└── backend/    # Node.js + Express + MongoDB
```

---

## ⚙️ Running the Project on Your System

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file inside the `backend` folder:

  ```
  MONGO_URL=your_mongodb_connection_string
  ```
* Start the backend server:

  ```bash
  npm run dev // nodemon running
  or
  npm start
  ```

  The backend runs on **[http://localhost:3000](http://localhost:3000)**

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on **[http://localhost:5173](http://localhost:5173)**

---

## 🧭 Project Flow

1. **Sign Up / Sign In** to your account.
2. **Access the chat interface** and start messaging other users in real-time.
3. **Update your profile image** from your profile section.

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Zustand (for state management)
* Tailwind CSS + DaisyUI

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose for ODM)

---

## ✨ Key Features

- 🔐 User Authentication (JWT-based)
- 💬 Real-time messaging
- 🧑‍💼 Profile management (update image)
- ⚡ Zustand state management
- 🎨 Tailwind + DaisyUI responsive design
- 📱 Fully responsive chat UI
