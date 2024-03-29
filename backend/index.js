const express = require('express')
const app = express()
const path = require('path');
const port = 3001

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello World????" });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})