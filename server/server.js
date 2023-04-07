const express = require('express');
const app = express();
const port = 3001;

app.get('/sse', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  setInterval(() => {
    res.write('data: ' + Date.now() + '\n\n');
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
