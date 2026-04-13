from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class YieldInput(BaseModel):
    crop: str
    yield_2019_20: float
    yield_2020_21: float
    yield_2021_22: float
    yield_2022_23: float

try:
    model = joblib.load("yield_model.joblib")
    print("✅ Model loaded successfully")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None

@app.get("/")
def root():
    return {"message": "Fasal Saathi Yield Prediction API", "status": "running"}

@app.get("/predict")
def predict_get():
    return {"predicted_yield": 2500, "note": "Use POST endpoint for actual prediction"}

@app.post("/predict")
def predict(data: YieldInput):
    if model is None:
        return {"error": "Model not loaded", "predicted_yield": 0}
    
    try:
        input_df = pd.DataFrame([{
            "Sl. No.": 1,
            "Crop-wise": data.crop,
            "2019-20": data.yield_2019_20,
            "2020-21": data.yield_2020_21,
            "2021-22": data.yield_2021_22,
            "2022-23": data.yield_2022_23
        }])
        
        input_df = pd.get_dummies(input_df, columns=['Crop-wise'], drop_first=False)
        
        feature_cols = model.get_booster().feature_names
        for col in feature_cols:
            if col not in input_df.columns:
                input_df[col] = 0
        
        input_df = input_df[feature_cols]
        
        prediction = model.predict(input_df)[0]
        
        return {
            "crop": data.crop,
            "predicted_yield": float(prediction),
            "unit": "kg/hectare"
        }
        
    except Exception as e:
        return {"error": str(e), "predicted_yield": 0}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)