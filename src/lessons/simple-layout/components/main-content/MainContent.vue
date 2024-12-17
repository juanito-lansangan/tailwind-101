<template>
  <div class="flex h-screen grow flex-col">
    <Topbar />
    <div class="flex-1 overflow-y-auto bg-gray-700 p-4 text-white">
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
      <ChatContent
        time="one week ago"
        name="Ada"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque accusamus ipsam temporibus dolore libero natus autem. Asperiores voluptatibus dicta aperiam cum sit, quis expedita vel doloremque neque? Veritatis, odio."
      />
      <ChatContent
        time="one week ago"
        name="Ada"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque accusamus ipsam temporibus dolore libero natus autem. Asperiores voluptatibus dicta aperiam cum sit, quis expedita vel doloremque neque? Veritatis, odio."
      />
      <ChatContent
        time="one week ago"
        name="Ada"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque accusamus ipsam temporibus dolore libero natus autem. Asperiores voluptatibus dicta aperiam cum sit, quis expedita vel doloremque neque? Veritatis, odio."
      />
      <ChatContent
        time="one week ago"
        name="Ada"
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

<style scoped>
/* Optional: Style scrollbar for a cleaner look */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
</style>
