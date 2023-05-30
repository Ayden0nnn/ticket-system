import Web3 from 'web3';

// 導入智能合約的 ABI（從 Remix 導出的）
import contractAbi from './assets/abi.json';
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// 使用智能合約的 ABI 和地址實例化合約對象
const contractAddress = '0xE43A5545877D0B516457A51a3FeC60832B9a14B7'; // 替換為您的智能合約地址
const contractInstance = new Web3.eth.Contract(contractAbi, contractAddress);

async function getContractTICKET() {
    const ticket = await contractInstance.methods.TICKET().call();
    return ticket;
  }

var t = getContractTICKET();
console.log(t);