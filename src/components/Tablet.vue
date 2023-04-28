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
  width: 24rem;
  height: 16rem;
  background-color: black;
  position: relative;
  border-radius: 12%;
  box-shadow: inset 0px 0px 2px 0.5px rgba(255, 255, 255, 0.661),
    inset 0px 0px 1px 2px rgba(144, 144, 144, 0.803);
  margin-block: 5rem 4rem;
}
.tablet__screen {
  width: 90%;
  height: 94%;
  background-color: white;
  position: absolute;
  top: 3%;
  left: 5%;
  border-radius: 7%;
}
</style>
