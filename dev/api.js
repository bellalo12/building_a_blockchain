const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/blockchain', (req, res)=>{
  res.send(bitcoin);
});

app.post('/transaction', (req, res)=>{
  
});

app.get('/mine', (req, res)=>{

});





app.listen(3000, ()=>{
  console.log('running on the port 3000')
});
