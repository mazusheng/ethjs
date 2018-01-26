/**
 * Created by mac on 18/1/25.
 */
import Web3 from 'web3';
// import Eth from 'web3-eth';

/**
 * 测试eth的web3.js  1.0.0版本
 * @type {string}
 */
//设置网络地址
const ethurl="https://ropsten.infura.io/";
const ropstenurl="https://ropsten.infura.io/";
const localurl="https://ropsten.infura.io/";
const web3 = new Web3(ropstenurl);

export const getBlock = async (params) => {
    const {number} =params;
    return web3.eth.getBlock(number)
        .then(data=>{
            console.log("blockdata====");
            console.log(data);
            return data;
        });
}
export const getTransactionReceipt = async (params) => {
    const {number} =params;
    return web3.eth.getTransactionReceipt()
        .then(data=>{
            console.log("trashData===========");
            console.log(data);
            return data;
        });
}
export const getTransactionCount = async (params) => {
    return web3.eth.getTransactionCount("0x270a14E7cc7c1bd45aB669d6f98B8f037A7cb89b")
        .then(data=>{
            console.log("transactionCount===========");
            console.log(data);
            return data;
        });
}
export const getStorageAt = async (params) => {
    return web3.eth.getStorageAt(contractAddress,trashNumber)
        .then(data=>{
            console.log("state==============="); // "0x03"
            console.log(data);
            return data;
        });
}
export const Contract = async (params) => {
    return web3.eth.Contract(jsonInterface,contractAddress)
}
export const getPastEvents = async (params) => {
    return theTest.getPastEvents("InventoryUnitLog",{
            filter: {}, // Using an array means OR: e.g. 20 or 23
            fromBlock: 0,
            toBlock: 'latest',
            // topics:[searchTopic]
        },
        function(error, events){
            return events;
        }
    );
}
