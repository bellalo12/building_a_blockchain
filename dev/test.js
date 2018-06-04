const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 ={
"chain": [
{
"index": 1,
"timestamp": 1528119688239,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1528119738634,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1528119763277,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "fb6c2bf067fc11e88cba3f02e8664359",
"transactionId": "197c6650-67fd-11e8-8cba-3f02e8664359"
},
{
"amount": "120",
"sender": "239AJWG4095AHEAYWEF129A",
"recipient": "A10HAEG52AEHWEFWE9V",
"transactionId": "1e1ec540-67fd-11e8-8cba-3f02e8664359"
},
{
"amount": "10",
"sender": "239AJWG4095AHEAYWEF129A",
"recipient": "A10HAEG52AEHWEFWE9V",
"transactionId": "1fc59770-67fd-11e8-8cba-3f02e8664359"
},
{
"amount": "300",
"sender": "239AJWG4095AHEAYWEF129A",
"recipient": "A10HAEG52AEHWEFWE9V",
"transactionId": "247def60-67fd-11e8-8cba-3f02e8664359"
}
],
"nonce": 19788,
"hash": "00005a21fb742e35d7ae6e974ff9c91cca50c5336588fd524a0f94474854c26b",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1528119826911,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "fb6c2bf067fc11e88cba3f02e8664359",
"transactionId": "2826d320-67fd-11e8-8cba-3f02e8664359"
},
{
"amount": "400",
"sender": "239AJWG4095AHEAYWEF129A",
"recipient": "A10HAEG52AEHWEFWE9V",
"transactionId": "3c53c5b0-67fd-11e8-8cba-3f02e8664359"
},
{
"amount": "50",
"sender": "239AJWG4095AHEAYWEF129A",
"recipient": "A10HAEG52AEHWEFWE9V",
"transactionId": "3f4121a0-67fd-11e8-8cba-3f02e8664359"
},
{
"amount": "120",
"sender": "239AJWG4095AHEAYWEF129A",
"recipient": "A10HAEG52AEHWEFWE9V",
"transactionId": "492a5ce0-67fd-11e8-8cba-3f02e8664359"
}
],
"nonce": 14961,
"hash": "0000b799572b65f30d70a1ecdf7963d192201c8688f333cd7b3c196cd3bab895",
"previousBlockHash": "00005a21fb742e35d7ae6e974ff9c91cca50c5336588fd524a0f94474854c26b"
},
{
"index": 5,
"timestamp": 1528119851129,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "fb6c2bf067fc11e88cba3f02e8664359",
"transactionId": "4e14c150-67fd-11e8-8cba-3f02e8664359"
}
],
"nonce": 30361,
"hash": "0000427fa8bcf65a9c846393488bf0cb89ce260f12318292704f0dda40b74bd1",
"previousBlockHash": "0000b799572b65f30d70a1ecdf7963d192201c8688f333cd7b3c196cd3bab895"
},
{
"index": 6,
"timestamp": 1528119854569,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "fb6c2bf067fc11e88cba3f02e8664359",
"transactionId": "5c83abc0-67fd-11e8-8cba-3f02e8664359"
}
],
"nonce": 148146,
"hash": "0000f486e6b857d434809e0fb20a52bd841ab4eca79020e793258d9bbae3bd93",
"previousBlockHash": "0000427fa8bcf65a9c846393488bf0cb89ce260f12318292704f0dda40b74bd1"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "fb6c2bf067fc11e88cba3f02e8664359",
"transactionId": "5e906bb0-67fd-11e8-8cba-3f02e8664359"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log('VALID:', bitcoin.chainIsValid(bc1.chain));
