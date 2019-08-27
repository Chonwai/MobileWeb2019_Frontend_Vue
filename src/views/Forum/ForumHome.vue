<template>
    <div class="forum-container p-4">
        <nav class="filter">
            <input class="search-filter" type="text" name="" id="">
        </nav>
        <section>
            <Item v-for="(item, index) in forumContent" :key="index" :title="item.title" :content="item.content"/>
        </section>
        <footer>
            <ForumFooter />
        </footer>
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
            itemsAmount: forumDB.forum.length,
            forumContent: forumDB.forum
        }
    },
    mounted() {
        console.log(this.itemsAmount);
    },
    components: {
        Item,
        ForumFooter
    },
}
</script>

<style lang="scss" scoped>
    
</style>