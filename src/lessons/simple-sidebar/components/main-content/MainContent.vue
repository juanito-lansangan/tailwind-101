<template>
  <div class="grow">
    <Topbar />
    <div class="p-4">
      <ChatContent
        time="one week ago"
        name="Ada"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque accusamus ipsam temporibus dolore libero natus autem. Asperiores voluptatibus dicta aperiam cum sit, quis expedita vel doloremque neque? Veritatis, odio."
      />
      <ChatContent
        time="one week ago"
        name="Erwan"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque accusamus ipsam temporibus dolore libero natus autem. Asperiores voluptatibus dicta aperiam cum sit, quis expedita vel doloremque neque? Veritatis, odio."
      />
      <ChatContent
        time="one week ago"
        name="Erwan"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque accusamus ipsam temporibus dolore libero natus autem. Asperiores voluptatibus dicta aperiam cum sit, quis expedita vel doloremque neque? Veritatis, odio."
      />
      <ChatContent
        time="one week ago"
        name="Ada"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque accusamus ipsam temporibus dolore libero natus autem. Asperiores voluptatibus dicta aperiam cum sit, quis expedita vel doloremque neque? Veritatis, odio."
      />
    </div>
  </div>
</template>
<script setup>
import Topbar from "./Topbar.vue";
import ChatContent from "./ChatContent.vue";
</script>
