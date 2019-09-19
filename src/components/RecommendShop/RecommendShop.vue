<template>
    <div class="recommend-container">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in topNShop" :key="index">
                <router-link :to="{ path: `/shop/${item.id}` }">
                    <img :src="item.photo_url" alt />
                </router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 2,
                spaceBetween: 20,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            allShops: [],
            topNShop: [],
            N: 3
        };
    },
    methods: {
        getAllShop() {
            this.allShops = this.$store.state.shops;
        },
        topN(N = 3) {
            let copyShopList = JSON.parse(JSON.stringify(this.allShops));
            for (let i = 0; i < N; i++) {
                let maxRate = 0;
                let highestPosition = 0;
                for (let j = 0; j < copyShopList.length; j++) {
                    let rate = copyShopList[j].like / copyShopList[j].dislike;
                    // console.log(rate);
                    if (maxRate < rate) {
                        maxRate = rate;
                        highestPosition = j;
                    }
                }
                this.topNShop.push(copyShopList[highestPosition]);
                copyShopList.splice(highestPosition, 1);
            }
        }
    },
    async created() {
        await this.getAllShop();
        await this.topN();
    }
};
</script>

<style lang="scss" scoped>
</style>