<template>
  <div class="flex items-center bg-gray-700 px-3 py-6 drop-shadow-md">
    <i class="text-gray-500"><Hash /></i>
    <span class="ml-2 grow text-lg text-blue-500">tailwind-css</span>
    <div class="flex items-center gap-6">
      <i class="text-white"><Sun /></i>

      <div class="relative drop-shadow-md">
        <input
          type="text"
          name="search"
          id="search"
          class="rounded-md border border-gray-900 bg-gray-900 p-2 outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Search..."
        />
        <i class="absolute right-2 top-2 text-white">
          <Search />
        </i>
      </div>
      <i class="text-white"><Bell /></i>
      <i class="text-white">
        <CircleUser />
      </i>
    </div>
  </div>
</template>
<script setup>
import { Hash, Sun, Search, Bell, CircleUser } from "lucide-vue-next";
</script>
