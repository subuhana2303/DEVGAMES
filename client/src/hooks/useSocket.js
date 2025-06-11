import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000'; // Or your deployed server URL

const useSocket = (matchId, onMessageReceived) => {
  const socketRef = useRef(null);

  useEffect(() => {
    if (!matchId) return;

    socketRef.current = io(SOCKET_URL, {
      query: { matchId },
      transports: ['websocket'],
    });

    // Listen for incoming messages (code changes, etc.)
    socketRef.current.on('message', (data) => {
      if (onMessageReceived) onMessageReceived(data);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [matchId, onMessageReceived]);

  // Send message
  const sendMessage = (data) => {
    if (socketRef.current) {
      socketRef.current.emit('message', data);
    }
  };

  return { sendMessage, socket: socketRef.current };
};

export default useSocket;
