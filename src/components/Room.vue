<script setup>
import Video from './video.vue'
</script>

<template>
  <div class="flex justify-center bg-red-200">
    <div class="w-2/3 h-screen flex items-center bg-red-400">
      <div class="h-2/3 w-full flex bg-red-600">
        <div class="w-2/3 p-4">
          <div class="h-full w-full "></div>
        </div>
        <div class="w-1/3 px-12 py-4">
          <div class="h-1/3 w-full ">
            <Video></Video>
          </div>
          <div class="h-1/6 flex items-center justify-around w-full bg-blue-800">
            <button class="bg-black w-10 h-8 rounded">
              <img src="../assets/audio.svg" class="w-6 h-6 m-auto">
            </button>
            <button class="bg-black w-10 h-8 rounded">
              <img src="../assets/camera.svg" class="w-6 h-6 m-auto">
            </button>
            <button class="bg-black w-10 h-8 rounded">
              <img src="../assets/message.svg" class="w-6 h-6 m-auto">
            </button>
            <button class="bg-black w-10 h-8 rounded">
              <img src="../assets/leave.svg" class="w-6 h-6 m-auto">
            </button>
          </div>
          <div class="h-1/2 bg-red-800">
            // 文件传输
          </div>
        </div>
      </div>
    </div>
  </div>
</template>