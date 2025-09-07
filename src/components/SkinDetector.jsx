import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tmImage from "@teachablemachine/image";
import adviceData from "./data.json"; // your latest JSON

const MODEL_URL = "/model/";

const SkinClassifier = ({ setResult }) => {
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const modelRef = useRef(null);

  const [useCamera, setUseCamera] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load Teachable Machine model
  const loadModel = async () => {
    if (!modelRef.current) {
      modelRef.current = await tmImage.load(
        MODEL_URL + "model.json",
        MODEL_URL + "metadata.json"
      );
    }
    return modelRef.current;
  };

  // Run prediction from image or base64
  const predictFromImage = async (imgSrc) => {
    setLoading(true);
    const model = await loadModel();

    const img = new Image();
    img.src = imgSrc;
    img.onload = async () => {
      const predictions = await model.predict(img);
      const highest = predictions.reduce((prev, curr) =>
        curr.probability > prev.probability ? curr : prev
      );

      const adviceKey =
        adviceData[highest.className] ? highest.className : "Normal Skin";

      setResult({
        diseaseName: highest.className,
        confidence: highest.probability,
        advice: adviceData[adviceKey],
      });

      setLoading(false);
    };
  };

  // Handle file upload
  const handleFile = (file) => {
    if (!file) return;
    const imgSrc = URL.createObjectURL(file);
    predictFromImage(imgSrc);
  };

  // Drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };
  const handleDragOver = (e) => e.preventDefault();

  // Capture webcam
  const capturePhoto = () => {
    if (!webcamRef.current) return;
    const imgSrc = webcamRef.current.getScreenshot();
    if (!imgSrc) return;
    predictFromImage(imgSrc);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Capture / Upload Area */}
      {!useCamera && (
        <>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-full max-w-xl h-40 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-gray-500 cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          >
            Drag & drop an image here or click to select
          </div>
          <p className="text-gray-600 text-center max-w-xl mt-2">
            Make sure the photo clearly shows your skin area. Good lighting helps
            the AI detect conditions more accurately. Avoid blurry or dark images.
          </p>
        </>
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
          <p className="text-gray-600 text-center max-w-xs mt-1">
            Position your skin in the frame and ensure the area is well-lit for
            best results.
          </p>
        </div>
      )}

      {/* Buttons Below */}
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

      {loading && <p className="text-gray-700 mt-2">Analyzing your skin…</p>}

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => handleFile(e.target.files[0])}
        className="hidden"
      />
    </div>
  );
};

export default SkinClassifier;
