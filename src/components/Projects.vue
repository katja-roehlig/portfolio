<script setup lang="ts">
import { projectStore } from "../../store/store";
import Smartphone from "./Smartphone.vue";
import Tablet from "./Tablet.vue";

const store = projectStore();
function swiping(): void {
  let projectBox = store.projects;
  let position = projectBox.findIndex((element) => element.visible === true);
  projectBox[position].visible = false;

  if (event!.target.className === "back") {
    if (position !== 0) {
      position--;
      projectBox[position].visible = true;
    } else {
      projectBox[projectBox.length].visible = true;
    }
  } else {
    if (position !== projectBox.length - 1) {
      projectBox[position + 1].visible = true;
    } else {
      store.projects[0].visible = true;
    }
  }
}
</script>
<template>
  <div class="project__header">
    <h2>Projects</h2>
    <a href="">☞ view all projects</a>
  </div>
  <div class="container">
    <button class="button back" @click="swiping()">◀︎</button>
    <template v-for="item in store.projects" :key="item.id">
      <Smartphone
        v-if="item.visible === true"
        :phone="item.phoneImg"
        :github="item.github"
        :web="item.web"
        class="smartphone"
        ><h3>{{ item.name }}</h3>
        <p class="project__description">{{ item.text }}</p></Smartphone
      >
    </template>

    <button class="button forward" @click="swiping()">►</button>
  </div>
  <Tablet />
</template>

<style scoped>
h3 {
  text-align: center;
  margin-block: 2rem 0rem;
}
.container {
  display: flex;
  flex-direction: row;
  gap: rem;
}
.button {
  all: unset;
  margin-bottom: 80%;
  font-size: 2rem;
  color: var(--accent-color);
}

.project__description {
  margin-block: 0.5rem 0;
}
.project__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
