<template>
  <div class="m-0 flex flex-col bg-gray-900 px-2 py-2 text-white">
    <SidebarIcon text="Trending">
      <Flame />
    </SidebarIcon>
    <SidebarIcon text="New Group">
      <Plus />
    </SidebarIcon>
    <SidebarIcon text="Connect">
      <Zap />
    </SidebarIcon>
    <SidebarIcon text="Packages">
      <Boxes />
    </SidebarIcon>
    <SidebarIcon text="Settings">
      <Cog />
    </SidebarIcon>
  </div>
</template>

<script setup>
import SidebarIcon from "./SidebarIcon.vue";
import { Flame, Zap, Plus, Boxes, Cog } from "lucide-vue-next";
</script>
