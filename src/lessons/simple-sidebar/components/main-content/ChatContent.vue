<template>
  <div class="mb-6 flex gap-4">
    <i class="text-gray-500">
      <CircleUser :size="50" />
    </i>
    <div>
      <div class="flex items-baseline gap-2">
        <span class="text-green-500">{{ name }}</span>
        <span class="text-xs text-gray-500">{{ time }}</span>
      </div>
      <p class="text-white">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { CircleUser } from "lucide-vue-next";
defineProps({
  name: String,
  time: String,
  message: String,
});
</script>
