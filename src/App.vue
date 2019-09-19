<template>
    <div id="app">
        <Header class="fixed top-0 w-screen z-50" />
        <router-view id="main-window" class="mt-14 mb-14 z-10"/>
        <Footer class="fixed bottom-0 w-screen z-50" />
    </div>
</template>

<script>
import Footer from './components/FooterNavigation/FooterNavigationIndex';
import Header from './components/Header/HeaderIndex';
export default {
    components: {
        Footer,
        Header
    }
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
