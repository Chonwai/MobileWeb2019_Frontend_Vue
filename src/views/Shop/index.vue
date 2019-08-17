<template>
  <div class="all-shops-page">
    <div class="shop-container w-screen flex justify-center items-center flex-col">
      <router-link
        class="w-full mb-4 cursor-pointer border-gray-300"
        v-for="(shop, index) in allShops"
        :key="index"
        :to="'/shop/' + index"
      >
        <div class="title-conatiner h-12 flex flex-row py-2 px-4">
          <div class="shop-icon flex justify-start w-1/5">
            <img class="w-auto h-full" src="../../assets/img/shop.svg" />
          </div>
          <div class="shop-info w-4/5 flex flex-col justify-center items-start">
            <p class="font-bold text-sm">{{ shop.name }}</p>
            <p class="text-2xs">{{ shop.address }}</p>
          </div>
        </div>
        <img
          class="card-img w-full h-64 object-cover bg-center"
          :src="shop.photo_url"
          :alt="shop.name"
        />
        <div class="review-container w-full h-12 flex flex-row py-2 px-4">
          <div class="like-box flex items-center">
            <img class="h-6 flex w-auto" src="../../assets/img/like.svg" alt />
            <p class="flex w-auto h-full ml-2 text-xl justify-start items-center">{{ shop.like }}</p>
          </div>
          <div class="like-box flex items-center ml-4">
            <img class="h-6 flex w-auto" src="../../assets/img/dislike.svg" alt />
            <p class="flex w-auto h-full ml-2 text-xl justify-start items-center">{{ shop.dislike }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopIndex",
  data() {
    return {
      allShops: []
    };
  },
  methods: {
    getAllShop() {
      this.allShops = this.$store.state.shops;
      console.log(this.allShops);
    }
  },
  created() {
    this.getAllShop();
  }
};
</script>

<style lang="scss" scoped>
</style>