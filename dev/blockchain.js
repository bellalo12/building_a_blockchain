const sha256 = require('sha256');
const currentNodeUrl= process.argv[3];

function Blockchain () {
  this.chain = [];
  this.pendingTransactions = [];
  
  this.currentNodeUrl= currentNodeUrl;
  this.networkNodes=[];

  this.createNewBlock(100, '0', '0');  //create a genesis block
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash){
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash,
    previousBlockHash: previousBlockHash
  };
  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}

Blockchain.prototype.getLastBlock = function(){
  return this.chain[this.chain.length -1]
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
  const newTransaction ={
    amount: amount,
    sender: sender,
    recipient: recipient
  };
  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()['index'] +1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
  const dataAsString = previousBlockHash + nonce.toString()+JSON.stringify(currentBlockData)
  const hash = sha256(dataAsString);
  return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
  while(hash.substring(0, 4) !== '0000'){
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
  }
  return nonce;
}
//bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
//=>repeatedly hash block until it finds correct hash => '00003IJLO423' , that start with 0000
//=>uses current block data for the hash, but also the previousBlockHash
//=>continously changes nonce value until it finds the correct hashBlock
//=>return to us the nonce value that create the correct hash

module.exports = Blockchain;
