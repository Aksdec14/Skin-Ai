import React from "react";

const ResultCard1 = ({ disease, confidence }) => {
  // High alert if doctor visit is recommended
  const isHighAlert =
    disease.whenToSeeDoctor && disease.whenToSeeDoctor.length > 0;
  const cardColor = isHighAlert
    ? "bg-red-100 text-red-900"
    : "bg-green-100 text-green-900";

  return (
    <div
      className={`max-w-xl mx-auto mt-6 p-6 rounded-lg shadow-lg ${cardColor}`}
    >
      {/* Condition name */}
      <h2 className="text-2xl font-bold mb-2">
        {disease.condition || "Unknown Condition"}
      </h2>

      {/* AI Confidence */}
      {confidence !== undefined && (
        <p className="mb-2 font-semibold">
          AI Confidence: {Math.round(confidence * 100)}%
        </p>
      )}

      {/* Description */}
      <p className="mb-2">
        <strong>Description:</strong>{" "}
        {disease.description && disease.description.trim().length > 0
          ? disease.description
          : "No description available."}
      </p>

      {/* Symptoms */}
      {disease.symptoms && disease.symptoms.length > 0 && (
        <div className="mb-2">
          <strong>Symptoms:</strong>
          <ul className="list-disc list-inside">
            {disease.symptoms.map((symptom, idx) => (
              <li key={idx}>{symptom}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Home Remedies */}
      {disease.homeRemedies && disease.homeRemedies.length > 0 && (
        <div className="mb-2">
          <strong>Home Remedies / Tips:</strong>
          <ul className="list-disc list-inside">
            {disease.homeRemedies.map((remedy, idx) => (
              <li key={idx}>{remedy}</li>
            ))}
          </ul>
        </div>
      )}

      {/* When to See a Doctor */}
      {isHighAlert && (
        <div className="mb-2">
          <strong>When to See a Doctor:</strong>
          <ul className="list-disc list-inside">
            {disease.whenToSeeDoctor.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Resources */}
      {disease.resources && disease.resources.length > 0 && (
        <div className="mt-2">
          <strong>Resources:</strong>
          <ul className="list-disc list-inside">
            {disease.resources.map((res, idx) => (
              <li key={idx}>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {res.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Final Disclaimer */}
      {isHighAlert ? (
        <p className="mt-2 font-bold text-red-700">
          ⚠️ This condition may require professional medical attention. Please
          consult a doctor if necessary.
        </p>
      ) : (
        <p className="mt-2 text-gray-700">
          ⚠️ This information is for guidance only and does not replace
          professional medical advice.
        </p>
      )}
    </div>
  );
};

export default ResultCard1;
