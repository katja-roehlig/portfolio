<script setup lang="ts">
const props = defineProps({
  phone: {
    type: String,
  },
  github: {
    type: String,
  },
  web: { type: String },
});
</script>

<template>
  <div class="project__container">
    <div class="phone__container">
      <div
        class="phone__screen"
        :style="`background-image:` + props.phone"
      ></div>

      <div class="phone__button"></div>
    </div>
    <div class="description__container">
      <article><slot>Description of the project</slot></article>

      <button>Show more</button
      ><button><a :href="props.github"> Github</a></button
      ><button><a :href="props.web">Website</a></button>
    </div>
  </div>
</template>
<style scoped>
.phone__container {
  background-color: black;
  width: 14rem;
  height: 25rem;
  border-radius: 1rem;
  position: relative;
  box-shadow: inset 0px 0px 2px 0.5px rgba(255, 255, 255, 0.661),
    inset 0px 0px 1px 2px rgba(144, 144, 144, 0.803);
  flex-shrink: 0;
}
.phone__screen {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 150% 100%;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.586);

  width: 94%;
  height: 90%;
  border-radius: 0.5rem;
  position: absolute;
  left: 3%;
  top: 2%;
}
.phone__button {
  width: 20%;
  height: 3%;
  border: 0.2px solid rgba(255, 252, 252, 0.419);
  border-radius: 5rem;
  background-color: rgb(0, 0, 0);
  position: absolute;
  right: 42%;
  bottom: 2.5%;
}
.project__container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
</style>
