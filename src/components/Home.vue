<script setup lang="ts"></script>
<template>
  <div class="heading" id="home">
    <h1 class="heading__main">Katja Röhlig</h1>
    <h2 class="heading__sub">Frontend Developer</h2>
  </div>
</template>
<style scoped>
.heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading__main,
.heading__sub {
  margin: 0;
  font-family: "AtmaMed";
  color: var(--text-color);
  font-size: 1.9rem;
  text-transform: none;
  letter-spacing: 0.1rem;
}
.heading__main {
  -webkit-text-stroke: 2px var(--accent-color);
  color: rgb(var(--bg-color));
  text-transform: uppercase;
  font-family: "AtmaBo";
  font-size: 4rem;
  margin-top: 1.5rem;
  filter: drop-shadow(0px 4px 4px var(--accent-color));
  letter-spacing: 0.2rem;
}

/* media-queries ************************************************************* */
@media (min-width: 768px) {
  .heading__main {
    font-size: 6.5rem;
    -webkit-text-stroke: 3px var(--accent-color);
    margin-top: 4rem;
    letter-spacing: 0.4rem;
  }
  .heading__sub {
    font-size: 2.5rem;
    margin-block: 4rem 1rem;
  }
}
</style>
