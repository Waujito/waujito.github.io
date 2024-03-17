<script setup lang="ts">
const userId = useRuntimeConfig().public.githubId;
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
