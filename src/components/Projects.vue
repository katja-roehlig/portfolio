<script setup lang="ts">
import Smartphone from "./Smartphone.vue";
import Tablet from "./Tablet.vue";
</script>
<template>
  <h2>Projects</h2>
  <div class="container">
    <Smartphone phone="url(src/assets/Tictactoe_Phone.webp)"
      ><h3>Tic Tac Toe Game</h3>
      <p>Game for one or two players</p></Smartphone
    >
    <Smartphone phone="url(src/assets/ShoppingList_Phone.webp)" />
    <Smartphone phone="url(src/assets/Birthday_1_1_Phone.webp)" />
    <Smartphone phone="url(src/assets/Sockomat.webp)" />
    <Tablet />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
