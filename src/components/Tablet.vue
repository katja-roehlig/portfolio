<script setup lang="ts"></script>

<template>
  <div>
    <h3>Tablet</h3>
    <div class="big__container">
      <dic class="screen__container"></dic>
    </div>
  </div>
</template>
<style scoped>
.big__container {
  width: 30rem;
  height: 20rem;
  background-color: black;
  position: relative;
  border-radius: 12%;
  box-shadow: inset 0px 0px 2px 0.5px rgba(255, 255, 255, 0.661),
    inset 0px 0px 1px 2px rgba(144, 144, 144, 0.803);
}
.screen__container {
  width: 90%;
  height: 94%;
  background-color: white;
  position: absolute;
  top: 3%;
  left: 5%;
  border-radius: 7%;
}
</style>
