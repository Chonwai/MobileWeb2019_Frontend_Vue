<template>
    <div class="about-container flex justify-center items-center p-4 flex-col w-screen">
        <h1>This project only for Mobile Web 2019</h1>
        <section class="mt-4">
            <div>
                Icons made by
                <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
                <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"
                    >CC 3.0 BY</a
                >
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.about-container {
    height: calc(100vh - 3.5rem - 3.5rem)
}
</style>
