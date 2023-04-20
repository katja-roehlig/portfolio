<script setup lang="ts">
import HamburgerMenu from "./icons/HamburgerMenu.vue";
import { ref, computed } from "vue";

let isVisible = ref(false);

function largeMenu() {
  return (isVisible.value = !isVisible.value);
}
</script>

<template>
  <nav class="nav__container">
    <div class="nav__menu">
      <HamburgerMenu
        class="nav__menu-icon"
        @click="largeMenu"
        v-if="isVisible === false"
      />
    </div>

    <ul class="nav__list" :class="{ opacity: isVisible }">
      <li class="nav__list-item">Home</li>
      <li class="nav__list-item">About</li>
      <li class="nav__list-item" v-if="isVisible"></li>
      <li
        class="nav__list-item nav__list-item-close"
        v-if="isVisible"
        @click="largeMenu"
      >
        X
      </li>
      <li class="nav__list-item">Skills</li>
      <li class="nav__list-item">Projects</li>
      <li class="nav__list-item">Contact</li>
    </ul>
  </nav>
</template>
<style scoped>
.nav__list {
  list-style: none;
  display: none;
}
.nav__menu {
  fill: var(--accent-color);
  width: 2rem;
}
.nav__container {
  display: flex;
  justify-content: flex-end;
}
.opacity {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-content: space-evenly;
  animation: nav-list-appear 0.5s ease-in-out 0s 1 both;
  position: absolute;
  border-radius: 0rem 0rem 1rem 1rem;
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  padding-inline-start: 0px;
  background-color: var(--accent-color);
  color: rgb(var(--bg-color));
}
@keyframes nav-list-appear {
  0% {
    opacity: 0;
    height: 0vh;
  }
  100% {
    opacity: 1;
    height: 20vh;
  }
}
.nav__list-item-close {
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 1rem;
  padding-right: 1.5rem;
}
@media (min-width: 768px) {
  .nav__menu {
    display: none;
  }
  .nav__list {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
}
</style>
