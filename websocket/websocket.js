export const getSocket = () => {
  const socket = new WebSocket('ws://localhost:8080/notifications');

  return socket;
};
