<script setup>

import { onMounted, ref } from 'vue'

let videoDOM = ref(null)
onMounted(() => {
  const constraints = { video: true, audio: false }
  navigator.mediaDevices
  .getUserMedia(constraints)
  .then(onSuccess)
  .catch(onError)
})

const onSuccess = (stream) => {
  const videoTracks = stream.getVideoTracks()
  console.log('视频设备: ' + videoTracks[0].label)
  // const audioTracks = stream.getAudioTracks()
  // console.log('音频设备: ' + audioTracks[0].label)
  // 播放轨道获取的流
  videoDOM.value.srcObject = stream
  console.log(videoDOM)
}
const onError = (error) => console.log(error)
</script>

<template>
  <video class="w-full h-full" ref="videoDOM" controls autoplay></video>
</template>