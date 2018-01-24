/**
 *
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import Eth from 'web3-eth';
/**
 * 测试eth的web3.js  1.0.0版本
 * @type {string}
 */
//设置网络地址
var ethurl="https://ropsten.infura.io/";
var ropstenurl="https://ropsten.infura.io/";
var localurl="https://ropsten.infura.io/";
var web3 = new Web3(ropstenurl);

var currentProvider=web3.currentProvider;
console.log(currentProvider)
//打印当前版本
var version = web3.version;
console.log(version);
//设置eth
var eth = new Eth(ropstenurl);
//获取最新区块number
var number = eth.blockNumber;
console.log("blocknumber=======");
console.log(number);
//获取当前区块内容
var block = web3.eth.getBlock(number)
console.log("blockdata====");
console.log(block);
//定义合约地址
var contractAddress="0x60d0cce72856122074136c5b0b9739122644b25a"
//获取某个合约数据
var trashData= web3.eth.getTransactionReceipt("0x66a77972fb412075ceeebd9590d2ff2946e9777da8531f332d8e206400610ede")
console.log("trashData===========");
console.log(trashData);
//查询地址的交易数量
var transactionCount=web3.eth.getTransactionCount("0x60d0cce72856122074136c5b0b9739122644b25a");
console.log("transactionCount===========");
console.log(transactionCount);
var trashNumber=trashData.blockNumber;
//查询当前区块的state
var storageState = web3.eth.getStorageAt(contractAddress,trashNumber)

console.log("state==============="+storageState); // "0x03"
//定义合约的jsonInterface
var jsonInterface=[{
    "name": "InventoryUnitLog",
    "type": "event",
    "inputs": [
        {"name": "inventoryNumber", "type": "uint", "indexed": false},
        {"name": "inventoryType", "type": "uint", "indexed": false},
        {"name": "createAddress", "type": "address", "indexed": true},
        {"name": "createTime", "type": "uint", "indexed": false}
    ]
}]
//初始化合约链接
var  theTest=new web3.eth.Contract(jsonInterface,contractAddress)
    theTest.getPastEvents("InventoryUnitLog",{
        filter: {}, // Using an array means OR: e.g. 20 or 23
        fromBlock: 0,
        toBlock: 'latest'
        },
        function(error, events){ console.log(events); }
    );
class App extends Component {
    constructor(){
        super();
        // set the provider you want from Web3.providers

    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
