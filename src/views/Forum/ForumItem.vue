<template>
  <div class="forum-item-component m-4 p-4 text-left border rounded">
    <div class="flex flex-row items-center">
      <img class="icon rounded-full w-10 border h-10" src alt />
      <p class="text-2xl font-bold pl-4">{{title}}</p>
    </div>
    <p class="text-xs mt-2">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: "ForumItem",
  props: {
    title: {
      type: String,
      default: null
    },
    userName: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>