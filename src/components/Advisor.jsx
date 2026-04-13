import React, { useEffect, useState } from "react";
import "./Advisor.css";
import WeatherCard from "./WeatherCard";
import SoilChatbot from "./SoilChatbot";
import YieldPredictor from "./YieldPredictor";
import {
  Sun,
  Droplets,
  IndianRupee,
  Sprout,
  Languages,
  WifiOff,
  Bug,
  FlaskConical,
  Users,
} from "lucide-react";

export default function Advisor() {
  const [farmers, setFarmers] = useState(0);
  const [crops, setCrops] = useState(0);
  const [languages, setLanguages] = useState(0);

  const [showWeather, setShowWeather] = useState(false);
  const [showSoilChatbot, setShowSoilChatbot] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showYieldForm, setShowYieldForm] = useState(false);

  useEffect(() => {
    let f = 0, c = 0, l = 0;
    const interval = setInterval(() => {
      if (f < 5000) setFarmers((f += 50));
      if (c < 120) setCrops((c += 2));
      if (l < 10) setLanguages((l += 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="advisor">
      <div className="floating-icons">
        <span>🌱</span>
        <span>☀️</span>
        <span>💧</span>
        <span>₹</span>
      </div>
 
      <div className="advisor-hero">
        <h1 className="fade-in">🌱 AI-Powered Agricultural Advisor</h1>
        <p className="fade-in">
          Personalized guidance for <span className="highlight">weather</span>,{" "}
          <span className="highlight">markets</span>, and{" "}
          <span className="highlight">soil health</span>.
        </p>
        <button className="get-started shine" onClick={() => setShowComingSoon(true)}>
          🚀 Get Started
        </button>
      </div>

      <div className="advisor-stats">
        <div className="stat">
          <h2>{farmers.toLocaleString()}+</h2>
          <p>Farmers Helped</p>
        </div>
        <div className="stat">
          <h2>{crops}+</h2>
          <p>Crops Analyzed</p>
        </div>
        <div className="stat">
          <h2>{languages}+</h2>
          <p>Languages Available</p>
        </div>
      </div>

      <div className="advisor-highlights">
        <h2 className="slide-in">✨ Features</h2>
        <br/><br/>
        <div className="cards">
          <div
            className="card reveal"
            style={{ cursor: "pointer" }}
            onClick={() => setShowWeather(true)}
          >
            <div className="icon">
              <Sun size={32} strokeWidth={2} />
            </div>
            <h3>Weather Forecasts</h3>
            <p>Accurate daily & weekly weather insights for farming decisions.</p>
          </div>

          <div className="card reveal" onClick={() => setShowComingSoon(true)}>
            <div className="icon">
              <Users size={32} />
            </div>
            <h3>Farmer Community</h3>
            <p>Connect, share tips, and learn from other farmers in your region.</p>
          </div>

          <div className="card reveal" onClick={() => setShowComingSoon(true)}>
            <div className="icon">
              <Droplets size={32} strokeWidth={2} />
            </div>
            <h3>Irrigation Guidance</h3>
            <p>Water-saving tips and irrigation schedules tailored to your crops.</p>
          </div>

          <div className="card reveal" onClick={() => setShowComingSoon(true)}>
            <div className="icon">
              <IndianRupee size={32} strokeWidth={2} />
            </div>
            <h3>Market Price Guidance</h3>
            <p>Market trends and price alerts to help you sell at the best time.</p>
          </div>

          <div
            className="card reveal"
            style={{ cursor: "pointer" }}
            onClick={() => setShowSoilChatbot(true)}
          >
            <div className="icon">
              <Sprout size={32} strokeWidth={2} />
            </div>
            <h3>Soil Health</h3>
            <p>Get soil analysis & recommendations via AI chatbot.</p>
          </div>

          <div className="card reveal" onClick={() => setShowComingSoon(true)}>
            <div className="icon">
              <Bug size={32} />
            </div>
            <h3>Crop Disease Detection</h3>
            <p>Upload plant images to detect diseases and get remedies.</p>
          </div>

          <div className="card reveal" onClick={() => setShowComingSoon(true)}>
            <div className="icon">
              <FlaskConical size={32} />
            </div>
            <h3>Fertilizer Recommendations</h3>
            <p>AI-powered fertilizer advice tailored to your soil & crops.</p>
          </div>

          <div className="card reveal" onClick={() => setShowComingSoon(true)}>
            <div className="icon">
              <WifiOff size={32} strokeWidth={2} />
            </div>
            <h3>Offline Access</h3>
            <p>Use the app anytime, even without internet connectivity.</p>
          </div>

          <div className="card reveal" onClick={() => setShowComingSoon(true)}>
            <div className="icon">
              <Bug size={32} />
            </div>
            <h3>Pest Management</h3>
            <p>Early warnings & organic pest control tips.</p>
          </div>
          
          <div
            className="card reveal"
            style={{ cursor: "pointer" }}
            onClick={() => setShowYieldForm(true)}
          >
            <div className="icon">📊</div>
            <h3>Yield Prediction</h3>
            <p>AI predicts crop yield based on historical data.</p>
          </div>
        </div>
      </div>

      {/* Weather popup */}
      {showWeather && (
        <div className="weather-overlay">
          <div className="weather-popup">
            <WeatherCard onClose={() => setShowWeather(false)} />
          </div>
        </div>
      )}

      {/* Soil Chatbot popup */}
      {showSoilChatbot && (
        <div className="weather-overlay">
          <div className="weather-popup">
            <SoilChatbot onClose={() => setShowSoilChatbot(false)} />
          </div>
        </div>
      )}

      {/* Yield Prediction popup */}
      {showYieldForm && (
        <div className="weather-overlay">
          <div className="weather-popup">
            <YieldPredictor onClose={() => setShowYieldForm(false)} />
          </div>
        </div>
      )}

      {/* Coming Soon popup */}
      {showComingSoon && (
        <div className="weather-overlay">
          <div className="weather-popup coming-soon">
            <h2>🚧 Coming Soon</h2>
            <p>This feature is under development. Stay tuned!</p>
            <button
              className="close-btn"
              onClick={() => setShowComingSoon(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <br /><br />
    </section>
  );
}