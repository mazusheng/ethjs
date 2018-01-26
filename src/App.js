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
var defaultAccount=web3.eth.defaultAccount;
console.log(currentProvider)
console.log(defaultAccount)
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
    .then(data=>{
        console.log("blockdata====");
        console.log(data);
        return data;
    });

//定义合约地址
var accountAddress="0x270a14E7cc7c1bd45aB669d6f98B8f037A7cb89b"
var contractAddress="0x60d0cce72856122074136c5b0b9739122644b25a"
//获取某个合约数据
var trashData= web3.eth.getTransactionReceipt("0x66a77972fb412075ceeebd9590d2ff2946e9777da8531f332d8e206400610ede")
    .then(data=>{
        console.log("trashData===========");
        console.log(data);
        return data;
    });

//查询地址的交易数量
var transactionCount = web3.eth.getTransactionCount("0x270a14E7cc7c1bd45aB669d6f98B8f037A7cb89b")
    .then(data=>{
        console.log("transactionCount===========");
        console.log(data);
        return data;
    });

var trashNumber=trashData.blockNumber;
//查询当前区块的state
var storageState = web3.eth.getStorageAt(contractAddress,trashNumber)
    .then(data=>{
        console.log("state==============="); // "0x03"
        console.log(data);
        return data;
    });


//定义合约的jsonInterface
var jsonInterface=[
    {
        "constant": false,
        "inputs": [
            {
                "name": "inventoryNumber",
                "type": "uint256"
            },
            {
                "name": "inventoryType",
                "type": "uint256"
            }
        ],
        "name": "AddInventorys",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "inventoryNumber",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "inventoryType",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "createAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "createTime",
                "type": "uint256"
            }
        ],
        "name": "InventoryUnitLog",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getMyInventoryUnitHistorys",
        "outputs": [
            {
                "name": "inventoryNumber",
                "type": "uint256"
            },
            {
                "name": "inventoryType",
                "type": "uint256"
            },
            {
                "name": "createAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "getMyInventorys",
        "outputs": [
            {
                "name": "inputNumber",
                "type": "uint256"
            },
            {
                "name": "outputNumber",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "inventoryNumber",
                "type": "uint256"
            },
            {
                "name": "inventoryType",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]
//初始化合约链接
var theTest = new web3.eth.Contract(jsonInterface,contractAddress)
var searchTopic = web3.utils.sha3(accountAddress);
var events = theTest.getPastEvents("InventoryUnitLog",{
        filter: {}, // Using an array means OR: e.g. 20 or 23
        fromBlock: 0,
        toBlock: 'latest',
        // topics:[searchTopic]
        },
        function(error, events){
            console.log(events);
            return events;
        }
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
