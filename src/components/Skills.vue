<script setup lang="ts">
import Css from "./icons/skills/Css.vue";
import Javascript from "./icons/skills/Javascript.vue";
import Typescript from "./icons/skills/Typescript.vue";
import Vue from "./icons/skills/Vue.vue";
import Sass from "./icons/skills/Sass.vue";
import Wordpress from "./icons/skills/WordPress.vue";
import Git from "./icons/skills/Git.vue";
import Github from "./icons/Github.vue";
import Gitlab from "./icons/skills/Gitlab.vue";
import React from "./icons/skills/React.vue";
import Next from "./icons/skills/Next.vue";
import Keycloak from "./icons/skills/Keycloak.vue";
import Nx from "./icons/skills/Nx.vue";
import Strapi from "./icons/skills/Strapi.vue";
import Chakra from "./icons/skills/Chakra.vue";
import Docker from "./icons/skills/Docker.vue";
import Vscode from "./icons/skills/Vscode.vue";
import Responsive from "./icons/skills/Responsive.vue";
import Api from "./icons/skills/Figma.vue";
import Figma from "./icons/skills/Api.vue";
</script>

<template>
  <article class="skills__container container" id="skills">
    <h3>Skills</h3>

    <h4>My tech skills and tools</h4>

    <ul class="tech-list">
      <li class="tech-list-item">
        <Vue class="icon-style" />
        <p class="icon-text">Vue.js</p>
      </li>
      <li class="tech-list-item">
        <Css class="icon-style" />
        <p class="icon-text">CSS3</p>
      </li>
      <li class="tech-list-item">
        <Sass class="icon-style" />
        <p class="icon-text">SCSS</p>
      </li>
      <li class="tech-list-item">
        <Javascript class="icon-style" />
        <p class="icon-text">Java <br />Script</p>
      </li>
      <li class="tech-list-item">
        <Typescript class="icon-style" />
        <p class="icon-text">Type <br />Script</p>
      </li>

      <li class="tech-list-item">
        <Wordpress class="icon-style" />
        <p class="icon-text">WordPress</p>
      </li>
      <li class="tech-list-item">
        <Api class="icon-style" />
        <p class="icon-text">
          RESTful<br />
          APIs
        </p>
      </li>
      <li class="tech-list-item">
        <Git class="icon-style" />
        <p class="icon-text">Git</p>
      </li>
      <li class="tech-list-item">
        <Github class="icon-style" />
        <p class="icon-text">Github</p>
      </li>
      <li class="tech-list-item">
        <Gitlab class="icon-style" />
        <p class="icon-text">Gitlab</p>
      </li>
      <li class="tech-list-item">
        <React class="icon-style" />
        <p class="icon-text">React</p>
      </li>
      <li class="tech-list-item">
        <Vscode class="icon-style" />
        <p class="icon-text">VS<br />Code</p>
      </li>

      <li class="tech-list-item">
        <Responsive class="icon-style" />
        <p class="icon-text">Responsive <br />Websites</p>
      </li>
      <li class="tech-list-item">
        <Figma class="icon-style" />
        <p class="icon-text">Figma</p>
      </li>
      <li class="tech-list-item">
        <Next class="icon-style" />
        <p class="icon-text">Next.js</p>
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
        <p class="icon-text">
          Strapi <br />
          Cms
        </p>
      </li>
      <li class="tech-list-item">
        <Nx class="icon-style" />
        <p class="icon-text">
          Nx <br />
          Monorepo
        </p>
      </li>
      <li class="tech-list-item">
        <Chakra class="icon-style" />
        <p class="icon-text">ChakraUI</p>
      </li>
    </ul>
  </article>
  <!-- <h4>My soft skills</h4> -->
</template>

<style scoped>
h4 {
  margin-top: var(--spacing-small);
}
.tech-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-inline: 1.7rem 1rem;
  grid-column-gap: 0.2rem;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;
}
.tech-list-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 1.2rem 1.5rem 0.2rem;
  padding: 0.4rem 0.1rem 0.3rem;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
  background-color: var(--bg-color-third-level);
  border-radius: 0.7rem;
  box-shadow: var(--box-shadow-small);
}
.icon-style {
  fill: var(--icon-color);
  width: calc(12% + 2.5rem);
}
.icon-text {
  margin: 0;
}
.skills__container {
  padding: 0rem 0rem 1rem 0rem;
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
  .icon-style {
    width: 20%;
  }

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
