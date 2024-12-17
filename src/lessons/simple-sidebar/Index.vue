<template>
  <div class="flex h-screen bg-gray-700">
    <Sidebar />
    <Channels />
    <MainContent />
  </div>
</template>

<script setup>
import Sidebar from "./components/sidebar/Sidebar.vue";
import Channels from "./components/channel/Channels.vue";
import MainContent from "./components/main-content/MainContent.vue";
</script>
