<template>
  <div class="p-2 text-xl text-gray-500">
    <div class="flex cursor-pointer items-center">
      <i class="text-blue-600" @click="collapse = !collapse">
        <ChevronRight :size="20" v-if="collapse" />
        <ChevronDown :size="20" v-else />
      </i>
      <span class="grow" @click="collapse = !collapse">
        {{ channel.name }}
      </span>
      <i class="text-blue-600">
        <Plus :size="20" />
      </i>
    </div>
    <ul class="pl-5 text-sm" :class="[collapse ? 'hidden' : '']">
      <li
        v-for="subchannel in channel.subchannels"
        :key="subchannel.id"
        class="flex cursor-pointer items-center"
      >
        <i class="text-white">
          <Hash :size="14" />
        </i>
        <span class="ml-1">
          {{ subchannel.name }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ChevronRight, Hash, ChevronDown, Plus } from "lucide-vue-next";
import { ref } from "vue";
defineProps({
  channel: Object,
});

let collapse = ref(true);
</script>
