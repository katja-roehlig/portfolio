<script setup lang="ts">
const props = defineProps({
  phone: {
    type: String,
  },
});
</script>

<template>
  <div class="phone__container">
    <div class="phone__screen" :style="`background-image:` + props.phone"></div>

    <div class="phone__button"></div>
  </div>
</template>

<style scoped>
.phone__container {
  background-color: black;
  aspect-ratio: 1 / 2;
  width: 25rem;

  border-radius: 1rem;
  position: relative;
  box-shadow: inset 0px 0px 2px 0.5px rgba(255, 255, 255, 0.661),
    inset 0px 0px 1px 2px rgba(144, 144, 144, 0.803), var(--box-shadow-small);
  flex-shrink: 0;
}
.phone__screen {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 150% 100%;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.586);

  width: 96%;
  height: 92%;
  border-radius: 0.5rem;
  position: absolute;
  left: 2%;
  top: 1%;
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

/* media-queries ************************************************************* */
/* @media (min-width: 580px) {
  .phone__container {
    width: 15rem;
    height: 30rem;
  }
} */
</style>
