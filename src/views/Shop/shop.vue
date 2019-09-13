<template>
    <div class="shop-view relative">
        <nav class="absolute w-screen h-16 top-0 left-0 z-50 p-4 flex justify-start">
            <router-link class="text-white" to="/shop">Back</router-link>
            <router-link class="text-white ml-4" to="/">Home</router-link>
        </nav>
        <div class="shop-banner w-screen h-auto relative">
            <div class="mask w-screen h-auto">
                <img class="w-screen object-cover opacity-50" :src="shopInfo.photo_url" :alt="shopInfo.name" srcset />
            </div>
            <p class="absolute text-white w-full h-full top-0 flex justify-center items-center text-4xl fadeInUp">
                {{ shopInfo.name }}
            </p>
        </div>
        <div class="shop-info p-4 flex flex-col justify-center items-start border-b border-gray-300">
            <p class="text-3xl">{{ shopInfo.name }}</p>
            <div class="flex flex-row items-center mt-2">
                <img class="object-contain" src="../../assets/img/location.png" alt srcset />
                <p class="text-lg text-left flex-1 pl-4">{{ shopInfo.address }}</p>
            </div>
            <div class="flex flex-row items-center mt-2">
                <img class="object-contain" src="../../assets/img/Asset8.png" alt srcset />
                <p class="text-lg text-left flex-1 pl-4">( {{ shopInfo.latitude }}, {{ shopInfo.longitude }} )</p>
            </div>
        </div>
        <section class="like-dislike p-4 w-screen border-b border-gray-300">
            <p class="flex justify-start text-2xl">評分：</p>
            <div class="flex flex-row w-full mt-2">
                <div class="like-box flex-1 flex items-center flex-col" @click="addRate('like')">
                    <img class="w-1/5" src="../../assets/img/like.svg" alt srcset />
                    <p class="mt-2">Like: {{ shopInfo.like }}</p>
                </div>
                <div class="dislike-box flex-1 flex items-center flex-col" @click="addRate('dislike')">
                    <img class="w-1/5" src="../../assets/img/dislike.svg" alt srcset />
                    <p class="mt-2">Dislike: {{ shopInfo.dislike }}</p>
                </div>
            </div>
        </section>
        <section class="map-container w-screen border-b border-gray-300">
            <p class="flex justify-start text-2xl py-4 px-4">我們在此：</p>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe
                        width="600"
                        height="500"
                        id="gmap_canvas"
                        :src="
                            'https://maps.google.com/maps?q=' +
                                shopInfo.latitude +
                                ',' +
                                shopInfo.longitude +
                                '&t=&z=17&ie=UTF8&iwloc=&output=embed'
                        "
                        frameborder="0"
                        scrolling="no"
                        marginheight
                        marginwidth
                    ></iframe>
                </div>
            </div>
        </section>
        <section class="recommand-container w-screen p-4">
            <p class="flex justify-start text-2xl">猜你喜歡：</p>
            <div class="recommand-shops"></div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Shop',
    data() {
        return {
            shopID: null,
            shopInfo: [],
            recommandShop: []
        };
    },
    methods: {
        addRate(rate) {
            if (rate === 'like') {
                this.$store.state.shops[this.shopID].like += 1;
                this.$swal.fire('評論成功', '你推薦了此店鋪', 'success');
            } else if (rate === 'dislike') {
                this.$store.state.shops[this.shopID].dislike += 1;
                this.$swal.fire('評論成功', '你不推薦此店鋪', 'success');
            }
        },
        getRecommandShop() {}
    },
    mounted() {
        this.shopInfo = this.$store.state.shops[this.shopID];
        console.log(this.shopInfo);
    },
    created() {
        this.shopID = this.$route.params.id;
        // this.$swal('Hello Vue world!!!');
    }
};
</script>

<style lang="scss" scropd>
@keyframes fadeInUp {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    animation-duration: 1s;
}
.mapouter {
    position: relative;
    text-align: right;
    height: auto;
    width: 100vw;
}
.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: auto;
    width: 100vw;
}
.shop-banner {
    img {
        height: 80vh;
    }
    .mask {
        height: 80vh;
        background-color: rgba(0, 0, 0, 0.7);
    }
}
.shop-info {
    img {
        width: 24px;
        height: 24px;
    }
}
</style>
