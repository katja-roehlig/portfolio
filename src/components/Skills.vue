<script setup lang="ts">
import Css from "./icons/skills/Css.vue";
import Javascript from "./icons/skills/Javascript.vue";
import Typescript from "./icons/skills/Typescript.vue";
import Vue from "./icons/skills/Vue.vue";
import Sass from "./icons/skills/Sass.vue";
import Html from "./icons/skills/Html.vue";
import Git from "./icons/skills/Git.vue";
import Github from "./icons/Github.vue";
import Vscode from "./icons/skills/Vscode.vue";
import Responsive from "./icons/skills/Responsive.vue";
import Api from "./icons/skills/Api.vue";
</script>

<template>
  <div class="skills__container">
    <h3>Skills</h3>

    <h4>My tech skills and tools</h4>

    <ul class="tech-list">
      <li class="tech-list-item"><Vue class="icon-style" />Vue.js</li>
      <li class="tech-list-item"><Css class="icon-style" />Css3</li>
      <li class="tech-list-item"><Sass class="icon-style bigger" />Scss</li>
      <li class="tech-list-item">
        <Javascript class="icon-style" />Java <br />Script
      </li>
      <li class="tech-list-item">
        <Typescript class="icon-style" />Type <br />
        Script
      </li>

      <li class="tech-list-item"><Html class="icon-style smaller" />Html5</li>
      <li class="tech-list-item">
        <Api class="icon-style" />RESTful<br />
        APIs
      </li>
      <li class="tech-list-item"><Git class="icon-style" />Git</li>
      <li class="tech-list-item"><Github class="icon-style" />Github</li>
      <li class="tech-list-item">
        <Vscode class="icon-style bigger" />VS<br />
        Code
      </li>

      <li class="tech-list-item">
        <Responsive class="icon-style bigger" />Responsive <br />Websites
      </li>
    </ul>
  </div>
  <!-- <h4>My soft skills</h4> -->
</template>

<style scoped>
.tech-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  padding: 0;
}
.tech-list-item {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.2rem 2rem 0.2rem;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.6rem;
  gap: 1rem;
}
.icon-style {
  width: 2.5rem;
  fill: var(--accent-color);
}

.bigger {
  width: 3rem;
}
.smaller {
  width: 2.2rem;
}
.skills__container {
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  box-shadow: 0px 6px 6px var(--accent-color-transparent),
    0px -4px 8px rgba(var(--text-color), 0.2);
  background-color: rgba(var(--bg-color), 0.6);
  border-radius: 0.7rem;
  margin-top: 3rem;
}
</style>
