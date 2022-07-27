<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavPanelComponent from "./components/NavPanelComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
// import StayWithRussiaComponent from "./components/StayWithRussiaComponent.vue";
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="split_border"></div>
  <div class="content">
    <NavPanelComponent></NavPanelComponent>
    <div class="main">
      <RouterView />
    </div>
  </div>
  <FooterComponent></FooterComponent>
  <!-- <StayWithRussiaComponent></StayWithRussiaComponent> -->
</template>
