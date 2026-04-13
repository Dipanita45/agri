import React, { useState } from "react";
import "./YieldPredictor.css";

const CROP_OPTIONS = [
  "Rice", "Wheat", "Maize", "Barley", "Jowar", "Bajra", "Ragi", 
  "Small Millets", "Tur", "Gram", "Urad", "Moong", "Lentil", "Other Pulses"
];

export default function YieldPredictor({ onClose }) {
  const [crop, setCrop] = useState("Rice");
  const [yield2019, setYield2019] = useState("");
  const [yield2020, setYield2020] = useState("");
  const [yield2021, setYield2021] = useState("");
  const [yield2022, setYield2022] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          crop: crop,
          yield_2019_20: parseFloat(yield2019) || 0,
          yield_2020_21: parseFloat(yield2020) || 0,
          yield_2021_22: parseFloat(yield2021) || 0,
          yield_2022_23: parseFloat(yield2022) || 0
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setResult(data.predicted_yield);
      } else {
        setError(data.detail || "Prediction failed");
      }
    } catch (err) {
      setError("Server not running. Start with: python3 -m uvicorn app:app --reload --port 8000");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="yield-predictor">
      <div className="yield-header">
        <h2>🌾 Yield Prediction</h2>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>

      <form className="yield-form" onSubmit={handlePredict}>
        <div className="form-group">
          <label htmlFor="crop">Select Crop</label>
          <select 
            id="crop" 
            value={crop} 
            onChange={(e) => setCrop(e.target.value)}
            required
          >
            {CROP_OPTIONS.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <h4>📊 Historical Yield Data (kg/hectare)</h4>
          
          <div className="yield-inputs">
            <div className="form-group">
              <label>2019-20</label>
              <input
                type="number"
                placeholder="Yield"
                value={yield2019}
                onChange={(e) => setYield2019(e.target.value)}
                required
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label>2020-21</label>
              <input
                type="number"
                placeholder="Yield"
                value={yield2020}
                onChange={(e) => setYield2020(e.target.value)}
                required
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label>2021-22</label>
              <input
                type="number"
                placeholder="Yield"
                value={yield2021}
                onChange={(e) => setYield2021(e.target.value)}
                required
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label>2022-23</label>
              <input
                type="number"
                placeholder="Yield"
                value={yield2022}
                onChange={(e) => setYield2022(e.target.value)}
                required
                min="0"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="predict-btn" disabled={loading}>
          {loading ? "⏳ Predicting..." : "🔮 Predict Yield"}
        </button>
      </form>

      {error && (
        <div className="yield-error">{error}</div>
      )}

      {result && (
        <div className="yield-result">
          <h3>📈 Predicted Yield (2023-24)</h3>
          <div className="result-value">{result.toFixed(2)}</div>
          <p className="result-unit">kg/hectare</p>
          
          <div className="result-compare">
            <p>Based on historical data for {crop}</p>
          </div>
        </div>
      )}

      <div className="yield-tips">
        <h4>💡 Tips</h4>
        <ul>
          <li>Enter accurate historical yields for better predictions</li>
          <li>Data from your local agricultural records</li>
          <li>Contact local agri office for verified data</li>
        </ul>
      </div>
    </div>
  );
}