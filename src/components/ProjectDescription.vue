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
      <button class="btn" v-show="props.github">
        <a class="btn-link" :href="props.github">
          <Github class="btn-icon" />Github
        </a></button><button class="btn">
        <a class="btn-link" :href="props.web">
          <Website class="btn-icon" />Website
        </a>
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
  margin-top: 0.8rem;
}

.btn-icon {
  width: 1.5rem;
  color: var(--icon-color);
  fill: var(--icon-color);
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

  padding: 1.2rem 2.5rem 0.9rem;
  box-shadow: var(--box-shadow-middle);
  border-radius: 1rem;
  background-color: var(--accent-secondary);
  cursor: pointer;
}

.btn:hover,
.btn-link:hover {
  background-color: var(--accent-primary);
  color: white;
  transform: scale(1.05)
}

.button__container {
  margin-top: 1.5rem;
  display: flex;
  width: 100%;
  position: relative;
  bottom: 5%;
  justify-content: center;
  gap: 6rem;
}
</style>
