<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import theHeader from './components/header.vue'

import { defineConfig } from 'vite'
// import ElementPlus from 'unplugin-element-plus/vite'
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
import Web3 from 'web3';
import type { AbiItem } from 'web3-utils';
// 導入智能合約的 ABI（從 Remix 導出的）
import contractAbi from './assets/abi.json';
const abi: AbiItem[] = contractAbi  as AbiItem[];
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// 使用智能合約的 ABI 和地址實例化合約對象
const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'; // 替換為您的智能合約地址

var contractInstance = new web3.eth.Contract(abi, contractAddress); 
async function getContractTICKET() {
  const ticket = await contractInstance.methods.TICKET().call();
  return ticket;
}
// console.log("ticket: ");

async function startApp() {
  try {
    await contractInstance.methods.TICKET().call();
    const ticket = await getContractTICKET();
    console.log("ticket: " + ticket);
  } catch (error) {
    console.error(error);
  }
}
startApp();
// import contractAbi from 'src/assets/abi.json';

</script>

<template>
  <div class="wrap -mt-30">
    <theHeader />
    <div class="flex">
      <img src="./components/icons/ticket.jpeg" class="w-150"/>
      <div class="mt-25  mx-20">
        <HelloWorld msg="NTNU Concert Ticket" /> 
        <el-divider border-style="double" />
        <h3 class="text-xl font-bold">目前售價: </h3>
        <div class="flex"><h3 class="text-3xl font-bold m-2">$1000</h3> </div>
        <el-input-number v-model="num" :min="1" :max="100" class="my-4" @change="handleChange" />
        <br/>
        <el-button type="primary">購買</el-button>
      </div>
    </div>
  
  </div>



</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
