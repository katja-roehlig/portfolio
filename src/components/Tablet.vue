<script setup lang="ts">
const props = defineProps({
  tablet: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="tablet__container">
      <div
        class="tablet__screen"
        :style="`background-image:` + props.tablet"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.tablet__container {
  width: 23rem;
  height: 16rem;
  background-color: black;

  border-radius: 12%;
  box-shadow: inset 0px 0px 2px 0.5px rgba(255, 255, 255, 0.661),
    inset 0px 0px 1px 2px rgba(144, 144, 144, 0.803);
  margin-block: 5rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tablet__screen {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.586);

  width: 90%;
  height: 94%;
  border-radius: 7%;
}
/* media-queries ************************************************************* */
@media (min-width: 768px) {
  .tablet__container {
    height: 21rem;
    width: 30.1875rem;
  }
}
</style>
