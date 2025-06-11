import React from "react";

const ProblemCard = ({ problem }) => {
  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h2 className="text-xl font-bold mb-2">{problem.title}</h2>
      <p className="text-gray-700">{problem.description}</p>
    </div>
  );
};

export default ProblemCard;
