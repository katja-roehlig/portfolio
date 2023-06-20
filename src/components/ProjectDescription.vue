<script setup lang="ts">
import Github from "./icons/Github.vue";
import Website from "./icons/Website.vue";
const props = defineProps({
  github: {
    type: String,
  },
  web: { type: String },
});
</script>

<template>
  <div class="media__container">
    <article>
      <slot>Description of the project</slot>
    </article>
    <div class="button__container">
      <button class="btn">
        <a class="btn-link" :href="props.github">
          <Github class="btn-icon" />Github</a
        ></button
      ><button class="btn">
        <a class="btn-link" :href="props.web"
          ><Website class="btn-icon" />Website</a
        >
      </button>
    </div>
  </div>
</template>

<style scoped>
.media__container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  height: calc(20rem + 50%);
  margin-top: 0.8rem;
}
.btn-icon {
  width: 1.5rem;
  color: var(--text-color);
  fill: var(--text-color);
}
.btn-icon:hover {
  color: var(--bg-color);
  fill: var(--bg-color);
}
.btn-link {
  text-decoration: none;
  color: black;
  font-family: RobotoReg;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.btn {
  all: unset;
  padding: 0.6rem 2rem;
  box-shadow: var(--box-shadow-middle);
  border-radius: 1rem;
  background-color: var(--bg-color-toggle);
  cursor: pointer;
}
.btn:hover,
.btn-link:hover {
  background-color: var(--heading-color);
  color: white;
}

.button__container {
  margin-top: 1.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  bottom: 5%;
}
</style>
