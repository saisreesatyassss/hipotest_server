const http = require('http');

// Use environment variable or default to port 3000
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// Listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Handle unexpected errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Handle process termination signals for graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
