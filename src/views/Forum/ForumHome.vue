<template>
    <div class="forum-container p-4">
        <p class="w-full flex text-2xl font-bold p-4">三盞燈之家論壇</p>
        <!-- <nav class="filter">
            <input class="search-filter" type="text" name="" id="">
        </nav> -->
        <section>
            <Item v-for="(item, index) in forumContent" :key="index" :title="item.title" :content="item.content" :icon="item.icon" :postImg="item.imageURL"/>
        </section>
        <!-- <footer>
            <ForumFooter />
        </footer> -->
    </div>
</template>

<script>
import Item from './ForumItem'
import ForumFooter from './ForumItem'
import forumDB from '../../assets/database/forum.json'
export default {
    name: 'ForumHome',
    data() {
        return {
            itemsAmount: forumDB.forum.length - 1,
            forumContent: forumDB.forum
        }
    },
    mounted() {
        console.log(this.forumContent);
        
    },
    components: {
        Item,
        ForumFooter
    },
}
</script>

<style lang="scss" scoped>
    
</style>