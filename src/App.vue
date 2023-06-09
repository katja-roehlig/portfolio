<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import ArrowUp from "./components/icons/ArrowUp.vue";
import { ref, onBeforeMount } from "vue";

let scrollOn = ref(false);
function scrollButton(event: Event): void {
  scrollOn.value = true;
  if (window.scrollY === 0) {
    scrollOn.value = false;
  }
}

onBeforeMount(() => {
  window.addEventListener("scroll", scrollButton);
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});

let userTheme = "light-theme";
function toggleTheme() {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
}
function getTheme() {
  return localStorage.getItem("user-theme");
}

function setTheme(theme: string) {
  localStorage.setItem("user-theme", theme);
  userTheme = theme;
  document.documentElement.className = theme;
}

function getMediaPreference() {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
}
</script>

<template>
  <Navigation />
  <button @click="toggleTheme">Toggle</button>
  <Home />

  <About class="about" />
  <Skills class="skills" />

  <Projects />
  <Contact />
  <div v-if="scrollOn">
    <a href="#home" class="btn-scroll"> <ArrowUp class="arrow" /> </a>
  </div>
</template>

<style>
:root.light-theme {
  --text-color: rgb(0, 0, 0);
  --text-color-inverse: rgb(150, 1, 117);
  --bg-color: rgb(255, 255, 255);
  --bg-color-transparent: rgba(255, 255, 255, 0.85);
  --bg-color-first-level: rgba(255, 255, 255, 0.6);
  --bg-color-second-level: rgba(255, 255, 255, 0);
  --bg-color-third-level: rgba(255, 255, 255, 0);
  --bg-color-light: rgba(255, 255, 255, 0.6);
  --drop-shadow-color: rgba(150, 1, 117);

  --icon-color: rgb(150, 1, 117);
  --heading-color: rgb(150, 1, 117);
  --h4-color: rgb(151, 104, 136);
  --h3-color: rgb(151, 104, 136);
  --box-shadow: 0px 6px 6px rgba(150, 1, 117, 0.4),
    0px -4px 8px rgba(0, 0, 0, 0.15);
  --box-shadow-small: none;
  --box-shadow-middle: 0px 1px 4px rgba(150, 1, 117, 0.4),
    0px -1px 8px rgba(0, 0, 0, 0.15);
  --bg-color-toggle: #ffffff;
}
:root.dark-theme {
  --text-color: rgb(255, 255, 240);
  --text-color-inverse: #212121;
  --bg-color: #212121;
  --bg-color-first-level: rgba(255, 255, 255, 0.07);
  --bg-color-second-level: rgba(255, 255, 255, 0.08);
  --bg-color-third-level: rgba(255, 255, 255, 0.11);
  --bg-color-transparent: rgba(18, 18, 25);
  --bg-color-light: rgba(23, 23, 29, 0.7);
  --bg-color-toggle: hsl(185, 27%, 55%);
  --drop-shadow-color: #000;
  --drop-shadow-color-dark: #000;
  --icon-color: hsl(185, 37%, 55%);
  --heading-color: hsl(319, 35%, 55%);
  --h4-color: hsl(319, 42%, 54%);
  --h3-color: hsl(185, 35%, 55%);
  --box-shadow: 0px 6px 6px black, 0px -4px 8px rgba(0, 0, 0, 0.056);
  --box-shadow-small: 0px 2px 3px black, 0px -2px 4px rgba(0, 0, 0, 0.056);
  --box-shadow-middle: 0px 2px 4px #212121, 0px -1px 8px rgba(0, 0, 0, 0.056);
}
.btn-scroll {
  all: unset;
  background-color: hsl(319, 42%, 54%);
  border-radius: 1rem;
  box-shadow: var(--box-shadow-small);
  width: 2.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 1.2rem 1.2rem 0.3rem 1.2rem;
  position: fixed;
  bottom: 10%;
  right: 3%;
}
.btn-scroll:hover {
  background-color: var(--text-color);
}

/*media-queries *******************************************************/
/* @media (min-width: 768px) {
  .first__container {
    display: flex;
    gap: 5rem;
  }
  .about,
  .skills {
    flex: 1 1 50%;
  }
} */
</style>
