<script setup lang="ts">
import { projectStore } from "../../store/store";
import Smartphone from "./Smartphone.vue";
import Tablet from "./Tablet.vue";
import TabletIcon from "./icons/TabletIcon.vue";
import PhoneIcon from "./icons/SmartphoneIcon.vue";
import LaptopIcon from "./icons/LaptopIcon.vue";
import ArrowLeft from "./icons/ArrowLeft.vue";
import ArrowRight from "./icons/ArrowRight.vue";

const store = projectStore();
function swiping(event: Event): void {
  let projectBox = store.projects;
  let position = projectBox.findIndex((element) => element.visible === true);
  projectBox[position].visible = false;
  const target = event.target as HTMLElement;
  if (target.className === "back") {
    if (position !== 0) {
      position--;
      projectBox[position].visible = true;
    } else {
      projectBox[projectBox.length].visible = true;
    }
  } else {
    if (position !== projectBox.length - 1) {
      projectBox[position + 1].visible = true;
    } else {
      store.projects[0].visible = true;
    }
  }
}
</script>
<template>
  <div class="project__container">
    <h3>Projects</h3>

    <!--  <a href="">☞ view all projects</a> -->

    <div class="content__container">
      <ArrowLeft class="arrow back" @click="swiping($event)" />
      <template v-for="item in store.projects" :key="item.id">
        <Smartphone
          v-if="item.visible === true"
          :phone="item.phoneImg"
          :github="item.github"
          :web="item.web"
          class="smartphone"
        >
          <div class="icon__container">
            <PhoneIcon class="view-icon" />
            <TabletIcon class="view-icon" />
            <LaptopIcon class="view-icon" />
          </div>
          <h4>{{ item.name }}</h4>
          <p class="project__description">{{ item.text }}</p></Smartphone
        >
      </template>

      <ArrowRight class="arrow forward" @click="swiping($event)" />
    </div>
  </div>
  <!--  <Tablet /> -->
</template>

<style scoped>
h3 {
  text-align: center;
  margin-block: 2rem 0rem;
}
.content__container {
  display: flex;
  flex-direction: row;
}
.arrow {
  position: relative;
  width: 40px;
  padding-bottom: 20rem;
}
.back {
  left: 15%;
}
.forward {
  right: 15%;
}

.project__description {
  margin-block: 0.5rem 0;
}
/* .project__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
.icon__container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  padding: 0.5rem 1rem;
  box-shadow: -1px -1px 10px rgba(189, 188, 188, 0.557);
  width: 8rem;
  margin: 0.5rem auto 0 auto;
  border-radius: 0.5rem;
}
.phone-icon {
  padding-bottom: 0.2rem;
}

.view-icon:hover {
  color: var(--accent-color);
}
.project__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  box-shadow: 0px 6px 6px var(--accent-color-transparent),
    0px -4px 8px rgba(var(--text-color), 0.2);
  background-color: rgba(var(--bg-color), 0.6);
  border-radius: 0.7rem;
  margin-top: 3rem;
}
</style>
