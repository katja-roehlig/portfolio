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
    <div class="description__container">
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
  </div>
</template>
<style scoped>
.media__container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.btn-icon {
  width: 1.5rem;
  color: var(--accent-color);
  fill: var(--accent-color);
}
.btn-icon:hover {
  color: rgb(var(--bg-color));
  fill: rgb(var(--bg-color));
}
.link,
.btn-link {
  text-decoration: none;
  color: var(--text-color);
  font-family: RobotoReg;
}
.btn-link {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.link:hover {
  color: var(--accent-color);
  transform: scale(2);
}

.btn {
  all: unset;
  padding: 0.6rem 2rem;
  --border: 2px solid var(--accent-color);
  box-shadow: 0px 1px 4px var(--accent-color-transparent),
    0px -1px 8px rgba(var(--text-color), 0.1);
  border-radius: 1rem;
}
.btn:hover {
  background-color: var(--accent-color);
  color: rgb(var(--bg-color));
}

.button__container {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
}
</style>
