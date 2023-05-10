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
  if (target.id === "back") {
    if (position !== 0) {
      projectBox[position - 1].visible = true;
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
  phoneView.value = true;
  tabletView.value = false;
  desktopView.value = false;
}

let phoneView = ref(true);
let tabletView = ref(false);
let desktopView = ref(false);

function changeView(event: Event): void {
  const target = event.target as HTMLElement;

  if (target.id === "tablet") {
    phoneView.value = false;
    desktopView.value = false;
    tabletView.value = true;
  }
  if (target.id === "desktop") {
    phoneView.value = false;
    desktopView.value = true;
    tabletView.value = false;
  }
  if (target.id === "phone") {
    phoneView.value = true;
    desktopView.value = false;
    tabletView.value = false;
  }
}

let isZoomed = ref(false);
function zoomImage(): boolean {
  return (isZoomed.value = !isZoomed.value);
}
</script>
<!--* HTML ************************************************************************************************************** -->
<template>
  <article class="project__container container" id="projects">
    <h3>Projects</h3>

    <div class="flex__container">
      <ArrowLeft class="desktop-arrow" />
      <template v-for="item in store.projects" :key="item.id">
        <div class="content__container" v-if="item.visible === true">
          <Phone
            :phone="item.phoneImg"
            v-if="phoneView"
            @click="zoomImage"
            :class="{ zoom: isZoomed }"
          />
          <Tablet
            :tablet="item.tabletImg"
            v-if="tabletView"
            @click="zoomImage"
            :class="{ big: isZoomed }"
          />
          <Desktop
            :desktop="item.desktopImg"
            v-if="desktopView"
            @click="zoomImage"
            :class="{ big: isZoomed }"
          />

          <ProjectDescription
            :github="item.github"
            :web="item.web"
            class="smartphone"
          >
            <div class="icon__container">
              <ArrowLeft @click="swiping($event)" id="back" class="mobile" />
              <div class="view__container">
                <div
                  class="icon"
                  :class="{ active: phoneView }"
                  @click="changeView($event)"
                  v-if="item.phoneImg !== ''"
                >
                  <PhoneIcon class="view-icon" id="phone" />
                </div>
                <div
                  class="icon"
                  :class="{ active: tabletView }"
                  @click="changeView($event)"
                  v-if="item.tabletImg !== ''"
                >
                  <TabletIcon class="view-icon" id="tablet" />
                </div>
                <div
                  class="icon"
                  :class="{ active: desktopView }"
                  @click="changeView($event)"
                  v-if="item.desktopImg !== ''"
                >
                  <LaptopIcon class="view-icon" id="desktop" />
                </div>
              </div>
              <ArrowRight
                @click="swiping($event)"
                id="forward"
                class="mobile"
              />
            </div>
            <div class="project__heading__container">
              <h4 class="project__heading">{{ item.name }}</h4>
              <span class="counter"
                >{{ item.id }} / {{ store.projects.length }}</span
              >
            </div>
            <p class="project__description">
              {{ item.text1 }} <br />
              {{ item.text2 }}
            </p>
            <p class="project__stack">
              <span class="bold"> Tech Stack: </span> {{ item.techStack }}
            </p>
          </ProjectDescription>
        </div>
      </template>
      <ArrowRight class="desktop-arrow" />
    </div>
  </article>
</template>

<!--* CSS ************************************************************************************************************** -->
<style scoped>
.content__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#back {
  left: 15%;
}
#forward {
  right: 15%;
}
.desktop-arrow {
  display: none;
}
.project__description {
  margin-block: 0.5rem 0;
  text-align: center;
}

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
  background-color: rgb(var(--text-color));
}
.active {
  color: rgb(var(--bg-color));
  background-color: var(--accent-color);
}
.project__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 2.5rem 3rem 3rem;
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
.project__stack {
  text-align: center;
  margin-bottom: 3rem;
}
.bold {
  font-family: "RobotoReg";
}

.zoom {
  transition: transform 1s ease-out;
  transform: scale(1.8);
  transform-origin: 50% 10%;
  z-index: 1;
}
.big {
  transition: transform 1s ease-out;
  transform: scale(1.5);
  transform-origin: 50% 60%;
  z-index: 1;
}

@media (min-width: 1100px) {
  .flex__container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .content__container {
    max-width: 30vw;
    justify-content: flex-start;
    padding: 2.5rem 2.5rem 3rem 2rem;
    box-shadow: 0px 6px 6px var(--accent-color-transparent),
      0px -4px 8px rgba(var(--text-color), 0.2);
    background-color: rgba(var(--bg-color), 0.6);
    border-radius: 0.7rem;
  }
  .mobile {
    display: none;
  }
  .icon__container {
    justify-content: center;
  }
  .desktop-arrow {
    display: inline-block;
    align-self: center;
    width: 1.7rem;
    height: 1.7rem;
    border-width: 4px;
  }
}
</style>
