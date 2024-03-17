<script setup lang="ts"></script>

<template>
  <nav class="leftside_nav">
    <div class="nav_link">
      <NuxtLink to="/" class="main_router_link">
        <div>
          <img src="/img/home.svg" alt="Home" />
          <span class="alternative_text">Home</span>
        </div>
      </NuxtLink>
    </div>
    <div class="nav_link">
      <NuxtLink to="/projects" class="main_router_link">
        <div>
          <img
            src="/img/projects.svg"
            alt="Projects"
            style="width: 85%; height: 85%"
          />
          <span class="alternative_text">Projects</span>
        </div>
      </NuxtLink>
    </div>
    <div class="nav_link">
      <NuxtLink to="/contact" class="main_router_link">
        <div>
          <img
            src="/img/contact_me.svg"
            alt="Contact me"
            style="width: 85%; height: 85%"
          />
          <span class="alternative_text"><nobr>Contact me</nobr></span>
        </div>
      </NuxtLink>
    </div>
  </nav>
</template>
