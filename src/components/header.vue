<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo  w-screen"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
    <div class="logo">

      <el-menu-item index="0">HOME</el-menu-item>
    </div>
    <div class="flex-grow" />
    <div class="mt-4">
    <el-input
    v-model="input"
    placeholder="搜尋"
    class="input-with-select w-max rounded-4xl -ml-90"
    >
        <template #prepend>
            <el-button :icon="Search" />
        </template>
        <template #append>
            <el-select v-model="select" placeholder="Select" style="width: 90px">
            <el-option label="歌手" value="1" />
            <el-option label="場地" value="2" />
            </el-select>
        </template>
    </el-input>
    </div>
      <el-menu-item index="1" @click="requestAccounts">Connect wallet</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import { ethers } from 'ethers';
// await provider.send('eth_requestAccounts', []);
  // import { Component, Vue } from 'vue';
    const input = ref('')
    const select = ref('')
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  let provider = new ethers.BrowserProvider(window.ethereum);

  const requestAccounts = async () => {
    try {
      await provider.send('eth_requestAccounts', []);
      // 连接成功，执行其他操作
      // ...
    } catch (error) {
      console.error('连接钱包失败:', error);
      // 处理错误情况
    }
  };
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  .input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
  .logo {
  background-image: url(src/components/tickety-logo.png);
  background-size: 250px 90px; /* 調整圖片大小 */
  background-repeat: no-repeat;
  background-position: center;
  /* 可以進一步設定寬度、高度等樣式 */
}
.logo .el-menu-item {
  width: 250px; /* 調整Logo的寬度 */
  height: 90px; /* 自動計算Logo的高度，保持原始比例 */
  color: transparent;
}

  </style>
  