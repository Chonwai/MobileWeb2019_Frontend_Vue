<template>
  <section class="post-component w-screen p-8">
    <p class="w-full flex text-2xl font-bold">發表貼文</p>
    <div class="input-box w-full mt-4 block">
      <label class="inline-block float-left" for="image">照片：</label>
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
      <!-- <input id="image" class="border rounded-sm w-full p-2 truncate" type="file" accept="image/*" capture="camera" /> -->
    </div>
    <div class="input-box w-full mt-4 block">
      <label class="inline-block float-left" for="title">標題：</label>
      <input id="title" class="border rounded-sm w-full p-2" type="text" />
    </div>
    <div class="input-box w-full mt-4 block">
      <label class="inline-block float-left" for="content">內容：</label>
      <textarea id="content" class="border rounded-sm w-full p-2" cols="10" rows="10"></textarea>
    </div>
  </section>
</template>

<script>
import uploadIcon from "@/assets/img/upload.svg?inline";
import cameraIcon from "@/assets/img/camera.svg?inline";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  components: {
    uploadIcon,
    cameraIcon
  },
  methods: {
    async openLocal() {
      await this.$refs.cameraUploader.click();
    },
    async openCamera() {
      await this.$refs.cameraUploader.click();
      console.log(this.$refs.cameraUploader);
    },
    getImage(e) {
      console.log(e.srcElement.files[0]);
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