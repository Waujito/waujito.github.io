<script setup lang="ts">
const userId = import.meta.env.VITE_GITHUB_ID;
</script>

<template>
  <div class="header">
    <img
      :src="`https://avatars.githubusercontent.com/u/${userId}`"
      alt=""
      class="avatar"
    />
    <span class="welcome">Waujito's den</span>
  </div>
</template>
