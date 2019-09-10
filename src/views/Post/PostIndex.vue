<template>
    <section class="post-component w-screen p-8">
        <p class="w-full flex text-2xl font-bold">發表貼文</p>
        <div class="input-box w-full flex mt-4">
            <label for="">照片：</label>
            <input class="border rounded-sm flex-1 p-2 truncate" type="file" accept="image/*" capture="camera">
        </div>
        <div class="input-box w-full flex mt-4">
            <label for="">標題：</label>
            <input class="border rounded-sm flex-1 p-2" type="text" name="" id="">
        </div>
        <div class="input-box w-full flex mt-4">
            <label for="">內容：</label>
            <textarea class="border rounded-sm flex-1 p-2" name="" id="" cols="10" rows="10"></textarea>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
}
</script>

<style lang="scss" scoped>
    textarea {
        resize: none;
    }
</style>