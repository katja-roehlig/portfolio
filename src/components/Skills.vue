<script setup lang="ts">
import Css from "./icons/skills/Css.vue";
import Html from "./icons/skills/Html.vue";
import Javascript from "./icons/skills/Javascript.vue";
import Typescript from "./icons/skills/Typescript.vue";
import Vue from "./icons/skills/Vue.vue";
import Wordpress from "./icons/skills/Wordpress.vue";
import Git from "./icons/skills/Git.vue";
import React from "./icons/skills/React.vue";
import Next from "./icons/skills/Next.vue";
import Keycloak from "./icons/skills/Keycloak.vue";
import Strapi from "./icons/skills/Strapi.vue";
import Chakra from "./icons/skills/Chakra.vue";
import Docker from "./icons/skills/Docker.vue";
import Vscode from "./icons/skills/Vscode.vue";
import Responsive from "./icons/skills/Responsive.vue";
import Figma from "./icons/skills/Figma.vue";
import Api from "./icons/skills/Api.vue";
</script>

<template>
  <article class="skills__container container" id="skills">
    <h3>Skills</h3>

    <h4>My tech skills and tools</h4>

    <ul class="tech-list">
      <li class="tech-list-item">
        <Html class="icon-style" />
        <p class="icon-text">Html 5</p>
      </li>
      <li class="tech-list-item">
        <Css class="icon-style" />
        <p class="icon-text">CSS3 (SCSS)</p>
      </li>
      <li class="tech-list-item">
        <Javascript class="icon-style" />
        <p class="icon-text">Java Script</p>
      </li>
      <li class="tech-list-item">
        <Typescript class="icon-style" />
        <p class="icon-text">Type Script</p>
      </li>
      <li class="tech-list-item">
        <React class="icon-style" />
        <p class="icon-text">React</p>
      </li>
      <li class="tech-list-item">
        <Vue class="icon-style" />
        <p class="icon-text">Vue.js</p>
      </li>
      <li class="tech-list-item">
        <Next class="icon-style icon-color" />
        <p class="icon-text">Next.js</p>
      </li>
      <li class="tech-list-item">
        <Chakra class="icon-style" />
        <p class="icon-text">ChakraUI</p>
      </li>
      <li class="tech-list-item">
        <Git class="icon-style" />
        <p class="icon-text">Git</p>
      </li>
      <li class="tech-list-item">
        <Vscode class="icon-style icon-color" />
        <p class="icon-text">VS Code</p>
      </li>
      <li class="tech-list-item">
        <Docker class="icon-style" />
        <p class="icon-text">Docker</p>
      </li>
      <li class="tech-list-item">
        <Keycloak class="icon-style" />
        <p class="icon-text">Keycloak</p>
      </li>
      <li class="tech-list-item">
        <Strapi class="icon-style" />
        <p class="icon-text">Strapi Cms</p>
      </li>
      <li class="tech-list-item">
        <Wordpress class="icon-style" />
        <p class="icon-text">Word<wbr />Press</p>
      </li>
      <li class="tech-list-item">
        <Api class="icon-style icon-color" />
        <p class="icon-text">REST APIs</p>
      </li>

      <li class="tech-list-item">
        <Figma class="icon-style" />
        <p class="icon-text">Figma</p>
      </li>
    </ul>
  </article>
</template>

<style scoped>
.icon-color {
  fill: var(--icon-color);
}
h4 {
  margin-top: var(--spacing-small);
}
.tech-list {
  list-style: none;
  display: grid;
  padding-block: 1rem;
  grid-template-columns: repeat(4, 25%);
  padding-inline: 0.7rem 0.8rem;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;
}
.tech-list-item {
  height: 85px;
  display: flex;
  flex-direction: column;
  width: 90%;
  /*  margin: 1rem 1.2rem 1.5rem 0.2rem;*/
  padding: 1rem 0.1rem 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
  background-color: var(--bg-color-third-level);
  border-radius: 0.7rem;
  box-shadow: var(--box-shadow-small);
}

.icon-text {
  margin: 0;
  text-wrap: wrap;
  padding-inline: 1rem;
}
.skills__container {
  padding: 0rem 0rem 1rem 0rem;
}

.icon-style {
  width: 35px;
  height: 35px;
}

/* media-queries ************************************************************ */
@media (min-width: 768px) {
  .tech-list {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0.1rem;
    padding-inline: 3.5rem 2.5rem;
  }
  .tech-list-item {
    font-size: 1.5rem;
    background-color: var(--bg-color-second-level);
    box-shadow: var(--box-shadow-middle);
  }
  .skills__container {
    padding-bottom: 3.8rem;
  }
}

@media (min-width: 992px) {
  .tech-list {
    grid-column-gap: 0.7rem;
  }
  .tech-list-item {
    font-size: 1.6rem;
  }
  .skills__container {
    padding-bottom: 4.8rem;
  }
}
@media (min-width: 1100px) {
  .skills__container {
    padding-bottom: 5rem;
  }
  .tech-list {
    padding-inline: 9.5rem 9rem;
  }
}
</style>
