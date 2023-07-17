<script setup lang="ts">
import HamburgerMenu from "./icons/HamburgerMenu.vue";
import DarkIcon from "./icons/DarkIcon.vue";
import LightIcon from "./icons/LightIcon.vue";
import { ref, onBeforeMount } from "vue";

//fold-out-menu
let isVisible = ref(false);
function largeMenu(): boolean {
  return (isVisible.value = !isVisible.value);
}

//toggle light and dark mode
onBeforeMount(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});

let darkMode = ref(false);

function toggleTheme() {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
    darkMode.value = true;
  } else {
    setTheme("light-theme");
    darkMode.value = false;
  }
}
function getTheme() {
  return localStorage.getItem("user-theme");
}

function setTheme(theme: string) {
  localStorage.setItem("user-theme", theme);
  document.documentElement.className = theme;
}

function getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  darkMode.value = hasDarkPreference;
  return darkMode.value ? "dark-theme" : "light-theme";
}
</script>

<template>
  <nav class="nav__container">
    <div class="nav__menu">
      <HamburgerMenu
        class="nav__menu-icon"
        @click="largeMenu"
        v-if="!isVisible"
      />
    </div>

    <ul class="nav__list" :class="{ opacity: isVisible }">
      <li class="nav__list-item"><a href="#home" class="nav__link">Home</a></li>
      <li class="nav__list-item">
        <a href="#about" class="nav__link">About</a>
      </li>
      <li class="nav__list-item" v-if="isVisible"></li>
      <li
        class="nav__list-item nav__list-item-close"
        v-if="isVisible"
        @click="largeMenu"
      >
        X
      </li>
      <li class="nav__list-item">
        <a href="#skills" class="nav__link">Skills</a>
      </li>
      <li class="nav__list-item">
        <a href="#projects" class="nav__link">Projects</a>
      </li>
      <li class="nav__list-item">
        <a href="#contact" class="nav__link">Contact</a>
      </li>
    </ul>
    <DarkIcon class="nav__mode" @click="toggleTheme" v-if="!darkMode" />
    <LightIcon class="nav__mode" @click="toggleTheme" v-if="darkMode" />
  </nav>
</template>
<style scoped>
.nav__list {
  list-style: none;
  display: none;
  margin: 0;
  cursor: pointer;
}
.nav__menu {
  fill: var(--icon-color);
  width: 2rem;
}
.nav__container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.nav__link {
  color: var(--text-color);
  text-decoration: none;
  font-family: "RobotoReg";
  padding: 1rem 1rem;
}
.nav__link:hover {
  background-color: var(--bg-color);
  color: var(--icon-color);
  transform: scale(1.2);
}
.nav__mode {
  padding-inline: 0.5rem 0rem;
  order: -1;
  transition: transform 300ms ease-in-out;
}

.nav__mode:hover {
  transform: scale(1.3);
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
  background-color: var(--icon-color);
  color: rgb(var(--bg-color));
  z-index: 1;
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
  padding: 0.2rem 1.2rem;
  background-color: rgb(234, 232, 232);
  color: var(--icon-color);
  font-size: 1.8rem;
  font-family: "AtmaMed";
  border-radius: 0rem 0rem 0rem 0.5rem;
}
@media (min-width: 768px) {
  .nav__menu {
    display: none;
  }
  .nav__mode {
    padding-inline: 3rem 1rem;
    order: 0;
  }
  .nav__container {
    justify-content: flex-end;
  }
  .nav__list {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
  .nav__link:visited {
    color: var(--h4-color);
  }
}
</style>
