<template>
  <div class="sidebar-icon group">
    <slot />
    <span class="sidebar-tooltip group-hover:scale-100">
      {{ text }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  text: String,
});
</script>
