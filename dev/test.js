const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'OIE09866JNM93';
const currentBlockData = [
  {
    amount: 10,
    sender: 'NJE29403JHN3M',
    recipient: '03842DYCS56'
  },
  {
    amount: 300,
    sender: 'LHHIO3850J3L0',
    recipient: '249UDLE03DRY'
  },
  {
    amount: 50,
    sender: '3F3NEFHY26093',
    recipient: '220IEL394FE'
  }
];




console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 15023))
