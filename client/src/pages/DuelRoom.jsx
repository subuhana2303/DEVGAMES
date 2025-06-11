import React, { useEffect, useState } from 'react';
import Editor from '../components/Editor';
import { useParams } from 'react-router-dom';

const DuelRoom = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    // Fetch problem for match
    fetch(`/api/match/${id}`)
      .then(res => res.json())
      .then(data => setProblem(data.problem))
      .catch(console.error);
  }, [id]);

  if (!problem) return <div className="p-4">Loading problem...</div>;

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>
      <p className="mb-6 whitespace-pre-wrap">{problem.description}</p>
      <Editor />
    </div>
  );
};

export default DuelRoom;
