<script setup lang="ts">
import HamburgerMenu from "./icons/HamburgerMenu.vue";
let longMenu = false;
</script>

<template>
  <nav class="nav-container"><HamburgerMenu class="nav-menu" /></nav>
  <ul class="nav-list" v-if="longMenu">
    <li class="nav-list__item">Home</li>
    <li class="nav-list__item">About</li>
    <li class="nav-list__item">Skills</li>
    <li class="nav-list__item">Projects</li>
    <li class="nav-list__item">Contact</li>
    <li class="nav-list__item">Resume</li>
  </ul>
</template>
<style scoped>
.nav-list {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}
.nav-menu {
  fill: var(--accent-color);
  width: 2rem;
}
.nav-container {
  display: flex;
  justify-content: flex-end;
}
</style>
