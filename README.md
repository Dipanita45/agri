# 🌾 Fasal Saathi

> AI-Powered Agricultural Advisor for Smart Farming

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Last Commit](https://img.shields.io/github/last-commit/your-org/fasal-saathi)](https://github.com/your-org/fasal-saathi)
[![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Backend](https://img.shields.io/badge/Backend-Python-3776AB?style=flat&logo=python)](https://www.python.org/)

Fasal Saathi is a comprehensive agricultural platform that provides farmers with AI-driven insights including crop recommendations, weather forecasts, soil health analysis, and yield predictions.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌱 **Crop Recommendation** | AI-powered crop suggestions based on soil profile and regional climate |
| ☁️ **Weather Forecasts** | Real-time weather updates and farming alerts |
| 🧪 **Soil Health Analysis** | AI chatbot for soil analysis and nutrient recommendations |
| 📊 **Yield Prediction** | ML-based crop yield predictions using historical data |
| 🌐 **Multi-language Support** | Interface available in 10+ Indian languages |
| 📱 **Responsive Design** | Mobile-friendly dashboard for all devices |

---

## 🛠 Tech Stack

### Frontend
- **React 19** - UI framework
- **React Router** - Navigation
- **Lucide React** - Icons
- **Vite** - Build tool

### Backend
- **FastAPI** - Python web framework
- **XGBoost** - ML model for yield prediction
- **Pandas** - Data processing
- **Joblib** - Model serialization

### External Services
- **OpenWeatherMap API** - Weather data
- **Google Gemini API** - AI-powered soil analysis

---

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Python 3.9+
- pip

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/fasal-saathi.git
cd fasal-saathi
```

### 2. Frontend Setup

```bash
# Navigate to frontend (or root if using monorepo)
cd fasal-saathi

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Backend Setup

```bash
cd backend

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Run the API server
uvicorn app:app --reload --port 8000
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
# Backend
WEATHER_API_KEY=your_openweathermap_api_key
GEMINI_API_KEY=your_google_gemini_api_key
BACKEND_PORT=8000

# Frontend (if using Firebase or other services)
VITE_API_URL=http://localhost:8000
```

---

## 📁 Project Structure

```
fasal-saathi/
├── src/                      # React frontend source
│   ├── components/          # Reusable UI components
│   │   ├── Advisor/
│   │   ├── WeatherCard/
│   │   ├── SoilChatbot/
│   │   ├── YieldPredictor/
│   │   └── GoogleTranslate/
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API service modules
│   ├── utils/               # Utility functions
│   ├── styles/              # Global styles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── backend/                  # Python backend
│   ├── api/                 # API routes
│   ├── models/              # ML models
│   ├── services/            # Business logic
│   ├── app.py              # FastAPI main application
│   ├── main.py             # Additional endpoints
│   ├── train_model.py      # Model training script
│   ├── requirements.txt    # Python dependencies
│   └── yield_model.joblib # Trained ML model
│
├── tests/                    # Test files
│   ├── __mocks__/
│   └── *.test.js
│
├── public/                   # Static assets
│   └── agri.mp4
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── .env.example
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── LICENSE
```

---

## 🔌 API Endpoints

### Backend (Port 8000)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/weather` | Get weather by city |
| POST | `/api/predict` | Yield prediction |
| POST | `/api/soil/analyze` | Soil analysis |

---

## 🧪 Testing

```bash
# Run frontend tests
npm test

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [Google Gemini](https://gemini.google.com/) for AI capabilities
- All contributors and testers

---

## 📞 Support

- 📧 Email: support@fasalsaathi.com
- 🐛 Report bugs via [GitHub Issues](https://github.com/your-org/fasal-saathi/issues)
- 💬 Join our community on [Discord](#)

---

<p align="center">Made with ❤️ for Indian Farmers</p>
