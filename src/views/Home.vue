<template>
    <div class="home">
        <section class="w-screen">
            <swiper class="w-screen h-72" :options="swiperOption">
                <swiper-slide class="flex justify-center items-center">
                    <img
                        class="w-full h-full object-center object-cover opacity-90"
                        src="https://img1.qunarzz.com/travel/poi/1507/91/745bf2de1c7817.jpg_480x360x95_5a1a27a2.jpg"
                        alt="三𦾟燈"
                        srcset
                    />
                </swiper-slide>
                <swiper-slide class="flex justify-center items-center">
                    <img
                        class="w-full h-full object-center object-cover opacity-90"
                        src="https://travel.ulifestyle.com.hk/cms/spots_photo/original/20131206143324_0_1.jpg"
                        alt="三𦾟燈"
                        srcset
                    />
                </swiper-slide>
                <swiper-slide class="flex justify-center items-center">
                    <img
                        class="w-full h-full object-center object-cover opacity-90"
                        src="https://www.iam.gov.mo/showFile.ashx?w=210&h=0&p=cityguide/Photos/634853933638115.jpg"
                        alt="三𦾟燈"
                        srcset
                    />
                </swiper-slide>
                <swiper-slide class="flex justify-center items-center">
                    <img
                        class="w-full h-full object-center object-cover opacity-90"
                        src="https://imgs.gotrip.hk/wp-content/uploads/2016/07/macau_food28.jpg"
                        alt="三𦾟燈"
                        srcset
                    />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </section>
        <nav class="home-nav-container w-screen h-32 justify-center items-center flex flex-row">
            <router-link class="flex w-1/3 h-24 p-4 justify-center items-center m-2 flex-col" :to="{ path: '/forum' }">
                <chatIcon class="w-16 h-12"/>
                <p class="mt-2 font-bold">論壇</p>
            </router-link>
            <router-link class="flex w-1/3 h-24 p-4 justify-center items-center m-2 flex-col" :to="{ path: '/new' }">
                <addIcon class="w-16 h-12"/>
                <p class="mt-2 font-bold">發表</p>
            </router-link>
            <router-link class="flex w-1/3 h-24 p-4 justify-center items-center m-2 flex-col" :to="{ path: '/shop' }">
                <placeholderIcon class="w-16 h-12"/>
                <p class="mt-2 font-bold">店鋪</p>
            </router-link>
        </nav>
        <section class="recommend-container px-4 mb-20">
            <p class="text-2xl w-full flex justify-start items-center">推薦店鋪</p>
            <RecommendShop class="mt-2"/>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import chatIcon from '@/assets/img/chat.svg?inline';
import addIcon from '@/assets/img/pencil.svg?inline';
import placeholderIcon from '@/assets/img/placeholder.svg?inline';
import RecommendShop from '@/components/RecommendShop/RecommendShop.vue';
export default {
    name: 'home',
    components: {
        chatIcon,
        addIcon,
        placeholderIcon,
        RecommendShop
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        };
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
nav {
    path {
        fill: #4299e1;
    }
}
</style>