<template>
  <nav class="footer-nav flex items-center h-14 bg-blue-500">
    <router-link class="flex-1 h-12 w-12 text-white flex justify-center items-center flex-col" :to="{path: '/'}">
      <img class="w-8 h-8" src="@/assets/img/home.svg"/>
      <p class="text-xs">首頁</p>
    </router-link>
    <router-link class="flex-1 h-12 w-12 text-white flex justify-center items-center flex-col" :to="{path: '/forum'}">
      <img class="w-8 h-8" src="@/assets/img/chat.svg"/>
      <p class="text-xs">討論區</p>
    </router-link>
    <router-link class="flex-1 h-12 w-12 text-white flex justify-center items-center" :to="{path: 'new'}">
      <p class="h-12 w-12 border-2 border-white rounded-full text-white text-2xl font-bold flex justify-center items-center">+</p>
    </router-link>
    <router-link class="flex-1 h-12 w-12 text-white flex justify-center items-center flex-col" :to="{path: '/shop'}">
      <img class="w-8 h-8" src="@/assets/img/placeholder.svg"/>
      <p class="text-xs">商戶列表</p>
    </router-link>
    <router-link class="flex-1 h-12 w-12 text-white flex justify-center items-center flex-col" :to="{path: '/about'}">
      <img class="w-8 h-8" src="@/assets/img/info.svg"/>
      <p class="text-xs">關於我們</p>
    </router-link>
  </nav>
</template>

<script>
import shopIcon from '@/assets/img/shop.svg';
export default {
    components: {
        shopIcon
    }
};
</script>

<style lang="scss" scoped>
    img {
        fill: white;
    }
</style>