<script setup lang="ts">
import Css from "./icons/skills/Css.vue";
import Html from "./icons/skills/Html.vue";
import Javascript from "./icons/skills/Javascript.vue";
import Typescript from "./icons/skills/Typescript.vue";
import Vue from "./icons/skills/Vue.vue";
import Python from "./icons/skills/Python.vue";
import Git from "./icons/skills/Git.vue";
import React from "./icons/skills/React.vue";
import Next from "./icons/skills/Next.vue";
import Sqlite from "./icons/skills/Sqlite.vue";
import Strapi from "./icons/skills/Strapi.vue";
import Chakra from "./icons/skills/Chakra.vue";
import Flask from "./icons/skills/Flask.vue";
import Figma from "./icons/skills/Figma.vue";
import Fastapi from "./icons/skills/FastApi.vue";
import Openai from "./icons/skills/Openai.vue";
import Langchain from "./icons/skills/Langchain.vue";
import Langgraph from "./icons/skills/Langgraph.vue";
import Langfuse from "./icons/skills/Langfuse.vue";
import Chroma from "./icons/skills/ChromaDB.vue";
import VSCode from "./icons/skills/Vscode.vue";


</script>

<template>
  <article class="container" id="skills">
    <h3>Skills</h3>
    <div class="skills__container">
      <h4>Frontend</h4>

      <ul class="tech-list">
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
          <Html class="icon-style" />
          <p class="icon-text">Html 5</p>
        </li>
        <li class="tech-list-item">
          <Css class="icon-style" />
          <p class="icon-text">CSS3 (SCSS)</p>
        </li>
        <li class="tech-list-item">
          <Figma class="icon-style" />
          <p class="icon-text">Figma</p>
        </li>
      </ul>
      <h4>Backend</h4>
      <ul class="tech-list">

        <li class="tech-list-item">
          <Fastapi class="icon-style icon-color" />
          <p class="icon-text">FastApi</p>
        </li>
        <li class="tech-list-item">
          <Sqlite class="icon-style" />
          <p class="icon-text">SQLite</p>
        </li>
        <li class="tech-list-item">
          <Python class="icon-style" />
          <p class="icon-text">Python</p>
        </li>
        <li class="tech-list-item">
          <Flask class="icon-style icon-color" />
          <p class="icon-text">Flask</p>
        </li>
        <li class="tech-list-item">
          <Strapi class="icon-style" />
          <p class="icon-text">Strapi Cms</p>
        </li>
      </ul>
      <h4>AI</h4>
      <ul class="tech-list">
        <li class="tech-list-item">
          <Langchain class="icon-style" />
          <p class="icon-text">LangChain</p>
        </li>
        <li class="tech-list-item">
          <Langgraph class="icon-style" />
          <p class="icon-text">LangGraph</p>
        </li>
        <li class="tech-list-item">
          <Openai class="icon-style" />
          <p class="icon-text">OpenAI</p>
        </li>
        <li class="tech-list-item">
          <Chroma class="icon-style" />
          <p class="icon-text">Chroma DB</p>
        </li>
        <li class="tech-list-item">
          <Langfuse class="icon-style" />
          <p class="icon-text">Langfuse</p>
        </li>
      </ul>
      <h4>Tools</h4>
      <ul class="tech-list">
        <li class="tech-list-item">
          <VSCode class="icon-style" />
          <p class="icon-text">VS Code</p>
        </li>
        <li class="tech-list-item">
          <Git class="icon-style" />
          <p class="icon-text">Git</p>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.icon-color {
  fill: var(--icon-color);
}

h4 {
  margin-top: var(--spacing-middle);
  padding-bottom: 0px;
  padding-left: 1rem;
  ;
  text-align: left;
}

.tech-list {
  list-style: none;
  display: grid;
  padding-block: 0rem 1rem;
  grid-template-columns: repeat(3, 33%);
  padding-inline-start: 0;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;
}

.tech-list-item {
  height: 85px;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1.2rem 0.1rem 1rem;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  text-align: center;
  background-color: var(--bg-color-second-level);
  border-radius: 0.7rem;
  box-shadow: var(--box-shadow-small-list);
}

.icon-text {
  margin: 0;
  text-wrap: wrap;
  padding-inline: 1rem;
}

.skills__container {
  padding: 0rem 1rem 1rem 1rem;
}

.icon-style {
  width: 35px;
  height: 35px;
  flex-shrink: 0;
}

/* media-queries ************************************************************ */
@media (min-width: 768px) {
  .tech-list {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.1rem;

  }

  .tech-list-item {
    font-size: 1.5rem;
    background-color: var(--bg-color-second-level);
    box-shadow: var(--box-shadow-small-list);
  }

  .skills__container {
    padding-bottom: 3.8rem;
    padding-inline: 3.5rem 2.5rem;
  }
}

@media (min-width: 992px) {
  .tech-list {
    grid-template-columns: repeat(5, 1fr);
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
    padding-inline: 9.5rem 9rem;

  }
}
</style>
