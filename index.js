const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminController = require('./src/booekjam/components/comcontroller'); // path 

const hostname = '127.0.0.1';
const port = 3000;

// Gunakan body-parser untuk parsing JSON
app.use(bodyParser.json());

// Route untuk halaman utama
app.get('/', (req, res) => {
  const data = `
    <body>
      <h1>Bookoejam</h1>
      <blockquote>backendclass-final</blockquote>
      <q>...</q>
    </body>
  `;
  res.status(200).send(data);
});

// Gunakan controller untuk path '/api'
app.use('/api', adminController);

// Mulai server Express
app.listen(port, hostname, () => {
  console.log(`Server Running at: http://${hostname}:${port}`);
});
