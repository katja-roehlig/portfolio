<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import ArrowUp from "./components/icons/ArrowUp.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

let scrollOn = ref(false);

function scrollButton(): void {
  scrollOn.value = window.scrollY !== 0;
}
/* long version
function scrollButton(event: Event): void {
  scrollOn.value = true;
  if (window.scrollY === 0) {
    scrollOn.value = false;
  }
} */
onMounted(() => {
  window.addEventListener("scroll", scrollButton);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrollButton);
});
</script>

<template>
  <Navigation />
  <Home />

  <About class="about" />

  <Skills class="skills" />
  <Projects />
  <Contact />
  <div v-if="scrollOn">
    <a href="#home" class="btn-scroll"> <ArrowUp class="arrow-scroll" /> </a>
  </div>
</template>

<style>
:root.light-theme {
  --text-color: rgb(0, 0, 0);
  --text-color-inverse: rgb(150, 1, 117);
  --bg-color: rgb(255, 255, 255);
  --bg-color-icon: rgba(255, 255, 255, 0.95);
  --bg-color-transparent: rgba(255, 255, 255, 0.85);
  --bg-color-first-level: rgba(255, 255, 255, 0.7);
  --bg-color-second-level: rgba(255, 255, 255, 0.6);
  --bg-color-third-level: rgba(255, 255, 255, 0.01);
  --bg-color-light: rgba(255, 255, 255, 0.6);
  --drop-shadow-color: rgba(150, 1, 117);

  --icon-color: #212121;
  --heading-color: rgb(150, 1, 117);
  --h4-color: /* rgb(151, 104, 136); */ hsl(185, 35%, 55%);
  --h3-color: rgb(150, 1, 117);
  --box-shadow: 0px 6px 6px rgba(150, 1, 117, 0.4),
    0px -4px 8px rgba(0, 0, 0, 0.15);
  --box-shadow-small: 0px 1px 2px rgba(150, 1, 117, 0.4),
    0px -2px 4px rgba(0, 0, 0, 0.15);
  --box-shadow-middle: 0px 1px 4px rgba(150, 1, 117, 0.4),
    0px -1px 8px rgba(0, 0, 0, 0.15);
  --bg-color-toggle: #ffffff;
  --spacing-small: 2rem;
  --spacing-wide: 1%;
  --disabled-color: #d5d2d2;
}
:root.dark-theme {
  --text-color: rgb(255, 255, 240);
  --text-color-inverse: #212121;
  --bg-color: rgb(33, 33, 33);
  --bg-color-icon: rgba(33, 33, 33, 0.8);
  --bg-color-first-level: rgba(255, 255, 255, 0.07);
  --bg-color-second-level: rgba(255, 255, 255, 0.08);
  --bg-color-third-level: rgba(255, 255, 255, 0.11);
  --bg-color-transparent: rgba(18, 18, 25);
  --bg-color-light: rgba(23, 23, 29, 0.7);
  --bg-color-toggle: hsl(185, 27%, 55%);
  --drop-shadow-color: #000;
  --drop-shadow-color-dark: #000;
  --icon-color: rgba(255, 255, 255, 0.8);
  --heading-color: hsl(319, 35%, 55%);
  --h4-color: rgb(187, 88, 156);
  --h3-color: hsl(185, 35%, 55%);
  --box-shadow: 0px 6px 6px black, 0px -4px 8px rgba(0, 0, 0, 0.056);
  --box-shadow-small: 0px 2px 3px black, 0px -2px 4px rgba(0, 0, 0, 0.056);
  --box-shadow-middle: 0px 2px 4px #212121, 0px -1px 8px rgba(0, 0, 0, 0.056);
  --spacing-small: 2rem;
  --spacing-wide: 4rem;
  --disabled-color: #888888;
}
.btn-scroll {
  background-color: hsl(319, 42%, 54%);
  border-radius: 1rem;
  box-shadow: var(--box-shadow-small);
  width: 2.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1.4rem 1.5rem 0.5rem 1.5rem;
  position: fixed;
  bottom: 10%;
  right: 3%;
  cursor: pointer;
}
.btn-scroll:hover {
  background-color: hsl(185, 35%, 55%);
}
.arrow-scroll {
  border-left-color: var(--bg-color);
  border-top-color: var(--bg-color);
}
</style>
