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
});
</script>

<template>
  <Navigation />
  <Home />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <div v-if="scrollOn">
    <a href="#home" class="btn-scroll"> <ArrowUp class="arrow" /> </a>
  </div>
</template>

<style scoped>
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
</style>
