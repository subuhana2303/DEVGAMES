import React, { useState } from "react";

const Editor = ({ onCodeChange }) => {
  const [code, setCode] = useState("// Write your code here");

  const handleChange = (e) => {
    setCode(e.target.value);
    onCodeChange(e.target.value);
  };

  return (
    <div className="w-full p-4">
      <textarea
        value={code}
        onChange={handleChange}
        className="w-full h-96 p-4 bg-black text-green-300 font-mono text-sm rounded shadow"
      />
    </div>
  );
};

export default Editor;
