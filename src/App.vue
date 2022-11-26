<template>
  <div>test</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import socket from "./services/socketio.service"

onMounted(() => {
  socket.setupConnection()
  socket.checkConnection()
})

</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
