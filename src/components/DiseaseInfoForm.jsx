import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import ResultCard from "./ResultCard";
import adviceData from "./DiseaseInfo.json"; // Your dataset mapping disease names to info

const RoboflowSkinClassifier = () => {
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);

  const [useCamera, setUseCamera] = useState(false);
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState("");
  const [userSymptoms, setUserSymptoms] = useState(""); // ✅ new state for symptoms

  const ROBOTFLOW_API_KEY = "fZ5Tv38HzhXhj2CwRKvR"; // Replace with your Roboflow API key
  const ROBOTFLOW_MODEL_URL =
    "https://serverless.roboflow.com/skin-disease-ieqns/3";

  const sendToRoboflow = async (base64Image) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios({
        method: "POST",
        url: ROBOTFLOW_MODEL_URL,
        params: { api_key: ROBOTFLOW_API_KEY },
        data: base64Image,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (response.data && response.data.predictions) {
        // Map predictions to include dataset info + userSymptoms
        const mappedPredictions = response.data.predictions.map((p) => {
          const diseaseInfo = adviceData[p.class] || {
            condition: p.class,
            description: "Information not available",
            homeRemedies: [],
            whenToSeeDoctor: [],
            resources: [],
            symptoms: [],
          };
          return {
            condition: diseaseInfo.condition || p.class,
            description: diseaseInfo.description,
            homeRemedies: diseaseInfo.homeRemedies || [],
            whenToSeeDoctor: diseaseInfo.whenToSeeDoctor || [],
            resources: diseaseInfo.resources || [],
            symptoms: [
              ...(diseaseInfo.symptoms || []),
              ...(userSymptoms ? [userSymptoms] : []), // ✅ merge user symptoms
            ],
            confidence: p.confidence,
          };
        });

        setPredictions(mappedPredictions);
      } else {
        setError("No predictions returned from API.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching data from Roboflow API.");
    } finally {
      setLoading(false);
    }
  };

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1]; // Remove data:image/...;base64,
      sendToRoboflow(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };
  const handleDragOver = (e) => e.preventDefault();

  const capturePhoto = () => {
    if (!webcamRef.current) return;
    const imgSrc = webcamRef.current.getScreenshot();
    if (!imgSrc) return;
    const base64 = imgSrc.split(",")[1];
    sendToRoboflow(base64);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <h2 className="text-2xl font-bold text-gray-900">Skin Disease Detector</h2>

      {/* ✅ Symptom Input */}
      <textarea
        value={userSymptoms}
        onChange={(e) => setUserSymptoms(e.target.value)}
        placeholder="Enter your symptoms here (e.g., itching, redness, pain)..."
        className="w-full max-w-xl p-3 border border-gray-400 rounded-lg text-gray-700"
        rows={3}
      />

      {!useCamera && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-full max-w-xl h-40 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-gray-500 cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        >
          Drag & drop an image here or click to select
        </div>
      )}

      {useCamera && (
        <div className="flex flex-col items-center space-y-2">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            className="w-80 h-60 rounded shadow-lg"
          />
          <button
            onClick={capturePhoto}
            className="mt-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Capture Photo
          </button>
        </div>
      )}

      <div className="flex space-x-4">
        <button
          onClick={() => setUseCamera(false)}
          className={`px-4 py-2 rounded ${
            !useCamera ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Upload Image
        </button>
        <button
          onClick={() => setUseCamera(true)}
          className={`px-4 py-2 rounded ${
            useCamera ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Use Camera
        </button>
      </div>

      {loading && <p className="text-gray-700 mt-2">Analyzing image…</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => handleFile(e.target.files[0])}
        className="hidden"
      />

      {/* Display Predictions Side by Side */}
      <div className="flex flex-wrap gap-6 mt-6 w-full justify-center">
        {predictions.map((disease, idx) => (
          <ResultCard
            key={idx}
            disease={disease}
            confidence={disease.confidence}
          />
        ))}
      </div>
    </div>
  );
};

export default RoboflowSkinClassifier;
