<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
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

//global variables
const store = projectStore();
let projectBox = store.projects;

//check screen-width
onBeforeMount(() => {
  const mediaQueryList = window.matchMedia("(min-width: 1100px)");
  if (mediaQueryList.matches) {
    projectBox[1].visible = true;
  }
});
//swipe projects on desktop
function movingProjects(event: Event): void {
  let indexLeft = projectBox.findIndex((element) => element.visible === true);
  let indexRight = indexLeft + 1;

  const target = event.target as HTMLElement;
  projectBox[indexLeft].visible = false;
  projectBox[indexRight].visible = false;
  if (target.id === "right") {
    let indexLeftNext = indexLeft + 2;
    let indexRightNext = indexLeft + 3;
    if (indexRight !== projectBox.length - 1) {
      projectBox[indexLeftNext].visible = true;
      projectBox[indexRightNext].visible = true;
    } else {
      projectBox[0].visible = true;
      projectBox[1].visible = true;
    }
  } else {
    let indexLeftNext = indexLeft - 2;
    let indexRightNext = indexRight - 2;
    if (indexLeft !== 0) {
      projectBox[indexLeftNext].visible = true;
      projectBox[indexRightNext].visible = true;
    } else {
      projectBox[projectBox.length - 2].visible = true;
      projectBox[projectBox.length - 1].visible = true;
    }
  }
}

//swipe projects on mobile
function swiping(event: Event): void {
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
      projectBox[0].visible = true;
    }
  }
}

function changeView(event: Event, id: number): void {
  const target = event.target as HTMLElement;
  let currentProject = projectBox.findIndex((element) => element.id === id);
  let image = projectBox[currentProject];
  {
    if (target.id === "tablet") {
      image.phoneView = false;
      image.desktopView = false;
      image.tabletView = true;
    }
    if (target.id === "desktop") {
      image.phoneView = false;
      image.desktopView = true;
      image.tabletView = false;
    }
    if (target.id === "phone") {
      image.phoneView = true;
      image.desktopView = false;
      image.tabletView = false;
    }
  }
}

//zoom project content
function zoomImage(id: number): any {
  let currentProject = projectBox.findIndex((element) => element.id === id);
  let image = projectBox[currentProject];
  image.isZoomed = !image.isZoomed;
}
</script>
<!--* HTML ************************************************************************************************************** -->
<template>
  <article class="project__container container" id="projects">
    <h3>Projects</h3>

    <div class="flex__container">
      <ArrowLeft
        class="desktop-arrow"
        @click="movingProjects($event)"
        id="left"
      />
      <template v-for="item in store.projects" :key="item.id">
        <div class="content__container" v-if="item.visible">
          <Phone
            :phone="item.phoneImg"
            v-if="item.phoneView"
            @click="zoomImage(item.id)"
            :class="{ zoom: item.isZoomed }"
          />

          <Tablet
            :tablet="item.tabletImg"
            v-if="item.tabletView"
            @click="zoomImage(item.id)"
            :class="{ big: item.isZoomed }"
          />
          <Desktop
            :desktop="item.desktopImg"
            v-if="item.desktopView"
            @click="zoomImage(item.id)"
            :class="{ big: item.isZoomed }"
          />

          <ProjectDescription
            :github="item.github"
            :web="item.web"
            class="description"
          >
            <div class="icon__container">
              <ArrowLeft @click="swiping($event)" id="back" class="mobile" />
              <div class="view__container">
                <div
                  class="icon"
                  :class="{ active: item.phoneView }"
                  @click="changeView($event, item.id)"
                  v-if="item.phoneImg !== ''"
                >
                  <PhoneIcon class="view-icon" id="phone" />
                </div>
                <div
                  class="icon"
                  :class="{ active: item.tabletView }"
                  @click="changeView($event, item.id)"
                  v-if="item.tabletImg !== ''"
                >
                  <TabletIcon class="view-icon" id="tablet" />
                </div>
                <div
                  class="icon"
                  :class="{ active: item.desktopView }"
                  @click="changeView($event, item.id)"
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
      <ArrowRight
        class="desktop-arrow"
        @click="movingProjects($event)"
        id="right"
      />
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
  position: relative;
  padding: var(--spacing-small) 1.5rem 0rem 1.5rem;
}
.flex__container {
  padding-inline: 1.5rem;
  display: flex;
  justify-content: center;
}
.mobile {
  position: absolute;
}
#back {
  left: 2%;
  top: 1.5rem;
}
#forward {
  right: 2%;
  top: 1.5rem;
}
.desktop-arrow {
  display: none;
}
.project__description {
  margin-block: 0.5rem 0rem;
  text-align: center;
}

.icon__container {
  margin-top: 1rem;
}
.view__container {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}
.icon {
  padding: 0.4rem 0.2rem 0rem 0.5rem;
  box-shadow: var(--box-shadow-middle);
  width: 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
.phone-icon {
  padding-bottom: 0.2rem;
}

.icon:hover {
  color: var(--bg-color);
  background-color: var(--text-color);
}
.active {
  color: var(--bg-color);
  background-color: var(--icon-color);
}
.project__container {
  position: relative;
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
.description {
  width: 95%;
  position: relative;
  padding-bottom: 1rem;
}
@media (min-width: 580px) {
  .content__container {
    background-color: var(--bg-color-second-level);
    box-shadow: var(--box-shadow-small);
    border-radius: 0.7rem;
    padding-top: var(--spacing-wide);
  }
}
.project__container {
  padding-bottom: var(--spacing-wide);
}
@media (min-width: 1100px) {
  .flex__container {
    flex-direction: row;
    gap: 3rem;
  }
  .project__container {
    padding: 0rem 0rem 5rem 0rem;
  }
  .content__container {
    max-width: 30vw;
    justify-content: flex-start;
    padding: 5rem 2.5rem 3rem 2rem;
    border-radius: 0.7rem;
    background-color: var(--bg-color-first-level);
    box-shadow: var(--box-shadow);
    margin-bottom: 2rem;
    margin-top: var(--spacing-small);
  }
  .flex__container {
    padding-inline: 9.5rem 9rem;
    margin-top: 5rem;
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
  #left {
    position: absolute;
    left: 2%;
  }
  #right {
    position: absolute;
    right: 2%;
  }
}
</style>
