import { useState } from "react";
import SkinClassifier from "./components/SkinDetector";
import ResultCard from "./components/ResultCard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DiseaseInfoForm from "./components/DiseaseInfoForm";
import NearbyDermatologists from "./components/DermatologistMap";
import { Footer } from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Header />
      <Hero />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6">
          Check the status of your skin here
        </h1>

        {/* ✅ Pass setResult into SkinClassifier */}
        <SkinClassifier setResult={setResult} />

        {/* ✅ Show results safely */}
        {result && (
          <ResultCard
            disease={{
              condition: result.diseaseName || "Unknown Condition",
              description:
                (result.advice && result.advice.advice) ||
                "No description available.",
              homeRemedies:
                (result.advice && result.advice.remedies) || [],
              symptoms:
                (result.advice && result.advice.symptoms) || [],
              whenToSeeDoctor:
                result.diseaseName === "Immediate Action"
                  ? ["Consult a dermatologist immediately."]
                  : [],
              resources: result.advice?.resources || [],
            }}
            confidence={result.confidence}
          />
        )}
      </div>

      <DiseaseInfoForm />

      <NearbyDermatologists />

      <Footer/>
    </>
  );
}

export default App;
