<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="leftside_nav">
    <RouterLink to="/" class="main_router_link"
      ><div><img src="/img/home.svg" alt="Home" /></div
    ></RouterLink>
    <RouterLink to="/projects" class="main_router_link">
      <div>
        <img
          src="/img/projects.svg"
          alt="Projects"
          style="width: 85%; height: 85%"
        />
      </div>
    </RouterLink>
    <RouterLink to="/contact" class="main_router_link">
      <div>
        <img
          src="/img/contact_me.svg"
          alt="Contact me"
          style="width: 85%; height: 85%"
        />
      </div>
    </RouterLink>
  </nav>
</template>
