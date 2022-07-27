<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="leftside_nav">
    <div class="nav_link">
      <RouterLink to="/" class="main_router_link">
        <div>
          <img src="/img/home.svg" alt="Home" />
          <span class="alternative_text">Home</span>
        </div>
      </RouterLink>
    </div>
    <div class="nav_link">
      <RouterLink to="/projects" class="main_router_link">
        <div>
          <img
            src="/img/projects.svg"
            alt="Projects"
            style="width: 85%; height: 85%"
          />
          <span class="alternative_text">Projects</span>
        </div>
      </RouterLink>
    </div>
    <div class="nav_link">
      <RouterLink to="/contact" class="main_router_link">
        <div>
          <img
            src="/img/contact_me.svg"
            alt="Contact me"
            style="width: 85%; height: 85%"
          />
          <span class="alternative_text"><nobr>Contact me</nobr></span>
        </div>
      </RouterLink>
    </div>
  </nav>
</template>
