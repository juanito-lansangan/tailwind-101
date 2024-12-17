<template>
  <div class="bg-gray-800 px-2">
    <h5 class="p-6 text-3xl font-semibold text-slate-300">Channels</h5>
    <ul>
      <li v-for="channel in channels" :key="channel.id">
        <ChannelItem :channel="channel" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import ChannelItem from "../channel/ChannelItem.vue";
const channels = [
  {
    id: 1,
    name: "Topics",
    subchannels: [
      {
        id: 1,
        name: "Vue",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "Angular",
      },
    ],
  },
  {
    id: 2,
    name: "Questions",
    subchannels: [
      {
        id: 1,
        name: "Why JS is so good?",
      },
      {
        id: 2,
        name: "PHP is dead?",
      },
      {
        id: 3,
        name: "Tailwind is on top?",
      },
    ],
  },
  {
    id: 3,
    name: "Random",
    subchannels: [
      {
        id: 1,
        name: "Random 1",
      },
      {
        id: 2,
        name: "Random 2",
      },
      {
        id: 3,
        name: "Random 3",
      },
    ],
  },
];
</script>
