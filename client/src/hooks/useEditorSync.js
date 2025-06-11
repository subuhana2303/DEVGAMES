import { useState, useEffect } from 'react';
import useSocket from './useSocket';

const useEditorSync = (matchId) => {
  const [code, setCode] = useState('');
  
  const { sendMessage } = useSocket(matchId, (incoming) => {
    if (incoming.type === 'code-update') {
      setCode(incoming.code);
    }
  });

  const updateCode = (newCode) => {
    setCode(newCode);
    sendMessage({ type: 'code-update', code: newCode });
  };

  return { code, updateCode };
};

export default useEditorSync;
