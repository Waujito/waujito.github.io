<script setup lang="ts">
import "./assets/scss/base.scss";
import "./assets/scss/leftside_nav.scss";
import "./assets/scss/header.scss";
import "./assets/scss/pages.scss";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import NavPanelComponent from "./components/NavPanelComponent.vue";

useSeoMeta({
  title: "Waujito - about me",
  description: "A website about a programmer named Vetrov Vadim aka Waujito",
  ogDescription: "A website about a programmer named Vetrov Vadim aka Waujito",
});
</script>

<template>
  <div id="border_draw">
    <div id="app">
      <HeaderComponent />
      <div class="split_border"></div>
      <div class="content">
        <NavPanelComponent />
        <div class="main">
          <NuxtPage />
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>
