const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//get entire blockchain
app.get('/blockchain', (req, res)=>{
  res.send(bitcoin);
});

//create a new transaction
app.post('/transaction', (req, res)=>{
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
  res.json({note:`Transaction will be added in block ${blockIndex}`})
});

//mine a block
app.get('/mine', (req, res)=>{

});





app.listen(3000, ()=>{
  console.log('running on the port 3000')
});
