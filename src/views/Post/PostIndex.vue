<template>
    <section class="post-component w-screen p-4">
        <p class="w-full flex text-2xl font-bold">{{ $t("newPost") }}</p>
        <div class="input-box w-full mt-4 block">
            <label class="inline-block float-left" for="image">{{ $t("image") }}</label>
            <div class="image-upload-box border rounded-sm w-full flex justify-center items-center">
                <button class="flex-1 flex justify-center items-center border-r p-2" @click="openLocal">
                    <uploadIcon class="w-6 h-6" />
                    <input
                        id="image"
                        class="border rounded-sm w-full p-2 truncate"
                        type="file"
                        accept="image/*"
                        hidden
                        ref="localUploader"
                        @change="getImage"
                    />
                </button>
                <button class="flex-1 flex justify-center items-center p-2" @click="openCamera">
                    <cameraIcon class="w-6 h-6" />
                    <input
                        id="image"
                        class="border rounded-sm w-full p-2 truncate"
                        type="file"
                        accept="image/*"
                        capture="camera"
                        hidden
                        ref="cameraUploader"
                        @change="getImage"
                    />
                </button>
            </div>
            <div class="result-box w-full rounded border" ref="previewBox">
                <!-- <canvas id="imagePreview" class="w-full h-48 rounded border" ref="canvas"></canvas> -->
                <img id="imagePreview" class="w-full object-cover object-center" alt srcset />
            </div>
        </div>
        <div class="input-box w-full mt-4 block">
            <label class="inline-block float-left" for="nickname">{{ $t("nickname") }}</label>
            <input id="nickname" class="border rounded-sm w-full p-2" type="text" />
        </div>
        <div class="input-box w-full mt-4 block">
            <label class="inline-block float-left" for="title">{{ $t("title") }}</label>
            <input id="title" class="border rounded-sm w-full p-2" type="text" />
        </div>
        <div class="input-box w-full mt-4 block">
            <label class="inline-block float-left" for="content">{{ $t("content") }}</label>
            <textarea id="content" class="border rounded-sm w-full p-2" cols="10" rows="10"></textarea>
        </div>
        <div class="input-box w-full mt-4 block">
            <button class="border border-blue-500 font-bold text-blue-500 rounded-sm w-full p-2" @click="submit">
                {{ $t("submit") }}
            </button>
        </div>
    </section>
</template>

<script>
import uploadIcon from '@/assets/img/upload.svg?inline';
import cameraIcon from '@/assets/img/camera.svg?inline';

import photoService from '@/assets/services/photo/photoService.js';

export default {
    data() {
        return {
            title: '',
            content: '',
            nickname: ''
        };
    },
    components: {
        uploadIcon,
        cameraIcon
    },
    methods: {
        async openLocal() {
            await this.$refs.localUploader.click();
        },
        async openCamera() {
            await this.$refs.cameraUploader.click();
        },
        async getImage(e) {
            let preview = document.getElementById('imagePreview');
            preview.style.height = `${(preview.offsetWidth * 4) / 6}px`;
            preview.style.width = `${preview.offsetWidth}px`;
            var src = URL.createObjectURL(e.srcElement.files[0]);
            preview.src = src;

            preview.onload = await function() {
                let photo = new photoService(preview);
                photo.saveImage();
            };
        },
        submit() {
            this.$swal.fire(this.$i18n.t("submitSuccess"), this.$i18n.t("submitInfo"), 'success');
        }
    }
};
</script>

<style lang="scss" scoped>
textarea {
    resize: none;
}

.svg-icon {
    border-color: black;
    color: black;
}

path {
    fill: #4299e1;
}
</style>
