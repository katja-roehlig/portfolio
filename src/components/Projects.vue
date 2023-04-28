<script setup lang="ts">
import { ref } from "vue";
import { projectStore } from "../../store/store";
import Phone from "./Phone.vue";
import Tablet from "./Tablet.vue";
import Desktop from "./Desktop.vue";

import TabletIcon from "./icons/TabletIcon.vue";
import PhoneIcon from "./icons/SmartphoneIcon.vue";
import LaptopIcon from "./icons/LaptopIcon.vue";
import ArrowLeft from "./icons/ArrowLeft.vue";
import ArrowRight from "./icons/ArrowRight.vue";
import ProjectDescription from "./ProjectDescription.vue";

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

let phoneView = ref(true);
let tabletView = ref(false);
let desktopView = ref(false);

function changeView(event: Event): void {
  const target = event.target as HTMLElement;

  if (target.id === "tablet") {
    console.log("Tablet");
    phoneView.value = false;
    desktopView.value = false;
    tabletView.value = true;
  }
  if (target.id === "desktop") {
    console.log("Desktop");
    phoneView.value = false;
    desktopView.value = true;
    tabletView.value = false;
  }
  if (target.id === "phone") {
    console.log("phone");
    phoneView.value = true;
    desktopView.value = false;
    tabletView.value = false;
  }
}
</script>
<template>
  <article class="project__container" id="projects">
    <h3>Projects</h3>
    <template v-for="item in store.projects" :key="item.id">
      <div class="content__container" v-if="item.visible === true">
        <Phone :phone="item.phoneImg" v-if="phoneView" />
        <Tablet :tablet="item.tabletImg" v-if="tabletView" />
        <Desktop :desktop="item.desktopImg" v-if="desktopView" />

        <ProjectDescription
          :github="item.github"
          :web="item.web"
          class="smartphone"
        >
          <div class="icon__container">
            <ArrowLeft @click="swiping($event)" />
            <div class="view__container">
              <div class="icon" @click="changeView($event)">
                <PhoneIcon class="view-icon" id="phone" />
              </div>
              <div class="icon" @click="changeView($event)">
                <TabletIcon class="view-icon" id="tablet" />
              </div>
              <div class="icon" @click="changeView($event)">
                <LaptopIcon class="view-icon" id="desktop" />
              </div>
            </div>
            <ArrowRight @click="swiping($event)" />
          </div>
          <div class="project__heading__container">
            <h4 class="project__heading">{{ item.name }}</h4>
            <span class="counter"
              >{{ item.id }} / {{ store.projects.length }}</span
            >
          </div>
          <p class="project__description">
            {{ item.text }}
          </p></ProjectDescription
        >
      </div>
    </template>
  </article>
  <!--  <Tablet /> -->
</template>

<style scoped>
.content__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.arrow {
  position: relative;
  width: 4rem;
  padding-bottom: 28rem;
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
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;
}
.view__container {
  display: flex;
  gap: 0.8rem;
}
.icon {
  padding: 0.4rem 0.2rem 0rem 0.5rem;
  box-shadow: 0px 1px 4px var(--accent-color-transparent),
    0px -1px 8px rgba(var(--text-color), 0.1);
  width: 2.5rem;
  border-radius: 0.5rem;
}
.phone-icon {
  padding-bottom: 0.2rem;
}

.icon:hover {
  color: rgb(var(--bg-color));
  background-color: var(--accent-color);
}
.project__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2.5rem 2.5rem 3rem;
  box-shadow: 0px 6px 6px var(--accent-color-transparent),
    0px -4px 8px rgba(var(--text-color), 0.2);
  background-color: rgba(var(--bg-color), 0.6);
  border-radius: 0.7rem;
  margin-top: 3rem;
}
.project__heading__container {
  position: relative;
  margin-top: 3rem;
}
.counter {
  position: absolute;
  bottom: 20%;
  right: 0%;
  font-size: 1.3rem;
  font-family: "RobotoReg";
}
</style>
