<template>
    <nav class="footer-nav flex items-center h-14 bg-blue-500">
        <router-link class="flex-1 h-12 w-12 text-white flex justify-center items-center flex-col" :to="{ path: '/' }">
            <homeIcon class="w-6 h-6" fill="white" />
            <!-- <p class="text-xs">首頁</p> -->
        </router-link>
        <router-link
            class="flex-1 h-12 w-12 text-white flex justify-center items-center flex-col"
            :to="{ path: '/forum' }"
        >
            <chatIcon class="w-6 h-6" fill="white" />
            <!-- <p class="text-xs">討論區</p> -->
        </router-link>
        <router-link class="flex-1 h-12 w-12 text-white flex justify-center items-center" :to="{ path: 'new' }">
            <addIcon class="w-6 h-6" fill="white" />
            <!-- <p
        class="h-12 w-12 border-2 border-white rounded-full text-white text-2xl font-bold flex justify-center items-center"
      >+</p> -->
        </router-link>
        <router-link
            class="flex-1 h-12 w-12 text-white flex justify-center items-center flex-col"
            :to="{ path: '/shop' }"
        >
            <placeholderIcon class="w-6 h-6" fill="white" />
            <!-- <p class="text-xs">商戶列表</p> -->
        </router-link>
        <router-link
            class="flex-1 h-12 w-12 text-white flex justify-center items-center flex-col"
            :to="{ path: '/about' }"
        >
            <infoIcon class="w-6 h-6" fill="white" />
            <!-- <p class="text-xs">關於我們</p> -->
        </router-link>
    </nav>
</template>

<script>
import homeIcon from '@/assets/img/home.svg?inline';
import chatIcon from '@/assets/img/chat.svg?inline';
import addIcon from '@/assets/img/pencil.svg?inline';
import placeholderIcon from '@/assets/img/placeholder.svg?inline';
import infoIcon from '@/assets/img/info.svg?inline';

export default {
    components: {
        homeIcon,
        chatIcon,
        addIcon,
        placeholderIcon,
        infoIcon
    }
};
</script>

<style lang="scss" scoped>
img {
    fill: white;
}
</style>
