import io from 'socket.io-client';

const socket = io();

socket.on('connection', () => {
  console.log('client connected');
});

socket.on('articleUpdate', update => {
  console.log('updated', update);
});