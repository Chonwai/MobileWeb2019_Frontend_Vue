<template>
  <nav class="footer-nav flex items-center h-12 bg-blue-500">
    <button class="flex-1 h-10 w-10 text-white flex justify-center items-center">
      <img class="w-auto h-full" src="@/assets/img/shop.svg"/>
      <!-- <shopIcon class="w-auto h-full"/> -->
    </button>
    <button class="flex-1 h-10 w-10 text-white flex justify-center items-center">
      <img class="w-auto h-full" src="@/assets/img/shop.svg" />
    </button>
    <button class="flex-1 h-10 w-10 text-white flex justify-center items-center">
      <p class="h-10 w-10 border-2 border-white rounded-full text-white text-2xl font-bold">+</p>
    </button>
    <button class="flex-1 h-10 w-10 text-white flex justify-center items-center">
      <img class="w-auto h-full" src="@/assets/img/shop.svg" />
    </button>
    <button class="flex-1 h-10 w-10 text-white flex justify-center items-center">
      <img class="w-auto h-full" src="@/assets/img/shop.svg" />
    </button>
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