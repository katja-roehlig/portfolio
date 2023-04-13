<script setup lang="ts"></script>
<template>
  <div class="heading">
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
}
.heading__main {
  color: rgb(var(--bg-color));
  -webkit-text-stroke: 1.5px var(--accent-color);
  text-transform: uppercase;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.heading__sub {
  color: var(--text-color);
}
</style>
