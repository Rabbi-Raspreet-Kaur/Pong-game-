const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const paddleWidth = 15;
const paddleHeight = 100;
const ballRadius = 10;
const playerX = 20;
const aiX = canvas.width - playerX - paddleWidth;