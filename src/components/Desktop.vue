<script setup lang="ts">
const props = defineProps({
  desktop: {
    type: String,
  },
});
</script>

<template>
  <div class="desktop__container">
    <div
      class="desktop__screen"
      :style="`background-image:` + props.desktop"
    ></div>
    <div class="desktop__keyboard"></div>
  </div>
</template>
<style scoped>
.desktop__container {
  aspect-ratio: 3/2;
  width: calc(20rem + 25%);
  background-color: black;
  position: relative;
  border-radius: 1rem;
  box-shadow: inset 0px 0px 2px 0.5px rgba(255, 255, 255, 0.661),
    inset 0px 0px 1px 2px rgba(144, 144, 144, 0.803);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: 1rem 4rem;
}
.desktop__screen {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 150% 100%;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.586);

  width: 94%;
  height: 94%;

  border-radius: 0.5rem;
}
.desktop__keyboard {
  width: 113%;
  height: 6%;
  background-image: linear-gradient(rgb(186, 184, 184), rgb(54, 54, 54));
  position: absolute;
  bottom: 0%;
  border-radius: 1rem 1rem 50rem 50rem;
  box-shadow: var(--box-shadow-small);
}
/* media-queries ************************************************************* */
</style>
