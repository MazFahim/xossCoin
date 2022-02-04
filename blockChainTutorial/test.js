const {Block, Transaction, Blockchain} = require("./index");

const EC = require('elliptic').ec;
var ec = new EC('secp256k1');
// Generate keys
const key1 = ec.genKeyPair();
const privateKey1 = key1.getPrivate("hex");
const walletNumber1 = key1.getPublic("hex");

const key2 = ec.genKeyPair();
const privateKey2 = key2.getPrivate("hex");
const walletNumber2 = key2.getPublic("hex");

const xosscoin = new Blockchain();

const tx1 = new Transaction(walletNumber1, walletNumber2, 100);
tx1.signTransaction(key1);
xosscoin.addTransaction(tx1);

xosscoin.minePendingTransactions(walletNumber1);

console.log(xosscoin.getBalanceOfAddress(walletNumber1));
console.log(xosscoin.getBalanceOfAddress(walletNumber2));

const tx2 = new Transaction(walletNumber2, walletNumber1, 50);
tx2.signTransaction(key2);
xosscoin.addTransaction(tx2);

xosscoin.minePendingTransactions(walletNumber1);
console.log(xosscoin.getBalanceOfAddress(walletNumber1));
console.log(xosscoin.getBalanceOfAddress(walletNumber2));

console.log(xosscoin.isBlockChainValid());

