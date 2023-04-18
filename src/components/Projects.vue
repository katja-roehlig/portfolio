<script setup lang="ts">
import { projectStore } from "../../store/store";
import Smartphone from "./Smartphone.vue";
import Tablet from "./Tablet.vue";

const store = projectStore();
</script>
<template>
  <h2>Projects</h2>
  <div class="container">
    <!--  phone="url(src/assets/Tictactoe_Phone.webp)" -->
    <Smartphone
      :phone="item.phoneImg"
      :github="item.github"
      :web="item.web"
      v-for="item in store.projects"
      ><h3>{{ item.name }}</h3>
      <p>{{ item.text }}</p></Smartphone
    >
    <Tablet />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
