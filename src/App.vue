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
  /* basic */
  --text-color: #1b1a2e;
  /* --text-color-inverse: #ffffff; */
  --accent-primary: #3b1977;
  --accent-secondary: #32c7d5;
  --disabled-color: #d5d2d2;

  /* background-color */
  --bg-color: #f8f7ff;
  --bg-color-first-level: #ffffff;
  --bg-color-second-level: #ededff;
  --h3-bg-color: var(--accent-primary);
  --link-bg-color: var(--accent-primary);
  --icon-bg-color: var(--h3-color);

  /* headings and links */
  --heading-color: var(--accent-primary);
  --sub-heading-color: var(--accent-primary);
  --h3-color: #ebe9f9;
  --h4-color: var(--accent-secondary);
  --nav-link-color: var(--accent-primary);
  --primary-to-secondary: var(--accent-primary);

  /* Icons */
  --icon-color: #ffffff;
  --icon-color-dark: #b5b5e3;

  /* shadow-color */
  --drop-shadow-color: rgba(93, 93, 252, 0.2);
  --drop-shadow-color-dark: rgba(2, 2, 77, 0.2);
  --box-shadow: 0px 12px 30px rgba(93, 93, 252, 0.12),
    0px 4px 10px rgba(0, 0, 0, 0.03);
  --box-shadow-small: 0px 4px 10px rgba(93, 93, 252, 0.1);
  --box-shadow-middle: 0px 8px 20px rgba(93, 93, 252, 0.12);

  /* spacing */
  --spacing-small: 2rem;
  --spacing-wide: 1%;

  --bg-gradient: radial-gradient(
      at 0% 0%,
      rgba(93, 93, 252, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(at 100% 100%, rgba(50, 215, 75, 0.05) 0%, transparent 50%);
}

:root.dark-theme {
  --text-color: rgb(255, 255, 240);
  /* --text-color-inverse: #212121; */
  --accent-primary: rgb(187, 88, 156);
  --accent-secondary: #64aeb4;
  --disabled-color: #888888;

  /* background-color */
  --bg-color: rgb(33, 33, 33);
  --bg-color-first-level: rgba(255, 255, 255, 0.07);
  --bg-color-second-level: rgba(255, 255, 255, 0.1);
  --h3-bg-color: rgba(255, 255, 255, 0.11);
  --link-bg-color: rgb(33, 33, 33);
  --icon-bg-color: var(--bg-color-first-level);

  /* headings and links */
  --heading-color: var(--accent-primary);
  --sub-heading-color: #ffffff;
  --h4-color: var(--accent-primary);
  --h3-color: var(--accent-secondary);
  --nav-link-color: var(--text-color);
  --primary-to-secondary: var(--accent-secondary);

  /* icon-color */
  --icon-color: #ffffff;
  --icon-color-dark: var(--accent-secondary);

  /* shadow-color */
  --drop-shadow-color: #000;
  --drop-shadow-color-dark: #000;
  --box-shadow: 0px 6px 6px black, 0px -4px 8px rgba(0, 0, 0, 0.056);
  --box-shadow-small: 0px 2px 3px black, 0px -2px 4px rgba(0, 0, 0, 0.056);
  --box-shadow-middle: 0px 2px 4px #212121, 0px -1px 8px rgba(0, 0, 0, 0.056);

  /* spacing */
  --spacing-small: 2rem;
  --spacing-wide: 4rem;
}
.btn-scroll {
  background-color: var(--accent-secondary);
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
