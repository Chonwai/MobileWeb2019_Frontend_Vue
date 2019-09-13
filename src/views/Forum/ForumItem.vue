<template>
    <div class="forum-item-component m-4 p-4 text-left border rounded">
        <div class="flex flex-row items-center">
            <img class="icon rounded-full w-10 border h-10 object-cover object-center" :src="icon" alt />
            <p class="text-2xl font-bold pl-4">{{ title }}</p>
        </div>
        <img
            class="post-img w-auto mt-2 object-cover object-center"
            ref="postImg"
            :src="postImg"
            :alt="title"
            id="postImg"
        />
        <p class="text-xs mt-2">{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'ForumItem',
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
        },
        icon: {
            type: String,
            default: null
        },
        postImg: {
            type: String,
            default: null
        }
    },
    data() {
        return {};
    },
    mounted() {
        // this.$refs.postImg.height = `${this.$refs.postImg.clientWidth * 4 / 6}px`;
        document.getElementById('postImg').height = '210';
    }
};
</script>

<style lang="scss" scoped>
.post-img {
    // height: calc( * 4 / 6);
}
</style>
