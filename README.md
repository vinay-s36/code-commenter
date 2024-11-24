# Code Commenter

This repository contains a **Code Commenter** application, which helps generate comments for your code to enhance its readability and maintainability. The project consists of two main parts:

- **Frontend**: A React-based user interface.
- **Backend**: A Flask-based server.

## Features
- Generate code comments programmatically.
- Seamless integration between frontend and backend.
- Supports Google Gemini API for enhanced comment generation.

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:

1. **Node.js** (for the frontend): [Download Node.js](https://nodejs.org/)
2. **Python** (for the backend): [Download Python](https://www.python.org/)
3. **Google Gemini API Key**: Follow the instructions below to obtain an API key.

## Obtaining Google Gemini API Key
1. Visit [Google Gemini API Key Documentation](https://ai.google.dev/gemini-api/docs/api-key).
2. Follow the steps provided to generate your API key.
3. Once obtained, store the API key in a `.env` file in the `backend` folder:
   ```
   API_KEY=your_api_key_here
   ```

---

## Installation

### Backend Setup (Flask)
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   python main.py
   ```

The backend server will start on `http://127.0.0.1:5000` by default.

### Frontend Setup (React)
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```

The frontend will start on `http://localhost:3000` by default.

---

## Usage
1. Ensure both the backend and frontend servers are running.
2. Open a browser and navigate to `http://localhost:3000`.
3. Upload your code or input the text to generate comments using the interface.

---

## Folder Structure
```
code-commenter/
├── frontend/    # React frontend code
└── backend/     # Flask backend code
```
