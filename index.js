const express = require('express');
const app = express();
const cors = require('cors');
// const port = 3000;
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon News Running');
})

app.get('/categories', (req, res) =>{
    res.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon API is running on ${port}`)
})