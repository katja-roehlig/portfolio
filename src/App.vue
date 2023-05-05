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
function scrollButton(event: Event) {
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
  background-color: rgba(var(--bg-color), 0.95);
  box-shadow: 0px 1px 5px var(--accent-color),
    0px -2px 10px rgba(var(--text-color), 0.1);
  border-radius: 10rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 1.8rem 1.4rem 1rem 1.4rem;
  position: fixed;
  bottom: 10%;
  right: 15%;
}
.arrow {
  border-left: 4px solid var(--accent-color);
  border-top: 4px solid var(--accent-color);
  border-radius: 3px;
}
</style>
