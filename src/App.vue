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
  --text-color: 0, 0, 0;
  --bg-color: 255, 255, 255;
  --bg-color-light: rgba(255, 255, 255, 0.6);
  --bg-color-lightest: rgba(255, 255, 255, 0.6);
  --shadow-color: 255, 255, 255;
  --accent-color: rgb(150, 1, 117);
  --accent-color-transparent: rgba(150, 1, 117, 0.4);
  --accent-color-light: rgb(151, 104, 136);
}
:root.dark-theme {
  --text-color: 255, 255, 240;
  --bg-color: 18, 18, 25;
  --bg-color-light: rgba(23, 23, 29, 0.7);
  --bg-color-lightest: rgba(28, 28, 33, 0.702);
  --shadow-color: 18, 18, 18;
  --accent-color: rgb(156, 56, 135);
  --accent-color-transparent: rgba(156, 56, 135, 0.6);
  --accent-color-light: rgb(151, 104, 136);
}
.btn-scroll {
  all: unset;
  background-color: rgba(var(--bg-color), 0.9);
  border-radius: 1rem;
  box-shadow: 0px 2px 6px var(--accent-color-transparent),
    0px -2px 8px rgba(var(--text-color), 0.1);
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
  background-color: rgba(var(--text-color), 0.1);
  border-color: var(--accent-color-light);
}

.arrow {
  border-color: var(--accent-color-light);
  border-color: var(--accent-color-light);
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
