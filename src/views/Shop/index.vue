<template>
  <div class='all-shops-page'>
      <div class="shop-container w-screen flex justify-center items-center flex-col p-4">
          <div class="shop-card w-full border border-gray-600 mt-4 mb-4 rounded" v-for="(shop, index) in allShops" :key="index">
              <img class="card-img rounded-t w-full" :src="shop.photo_url" :alt="shop.name">
              <div class="card-info">
                <p class=" font-bold text-2xl">{{ shop.name }}</p>
                <p>地址：{{ shop.address }}</p>
              </div>
          </div>
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