<script setup lang="ts">
import { onBeforeMount } from "vue";
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
import Magnifier from "./icons/Magnifier.vue";

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
  const target = event.target as HTMLElement;
  const indexLeft = projectBox.findIndex((element) => element.visible === true);
  let indexRight = indexLeft + 1;

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
  const target = event.target as HTMLElement;
  const position = projectBox.findIndex((element) => element.visible === true);
  projectBox[position].visible = false;

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
  const currentProject = projectBox.findIndex((element) => element.id === id);
  const image = projectBox[currentProject];
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
  const currentProject = projectBox.findIndex((element) => element.id === id);
  const image = projectBox[currentProject];
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
          <div class="image__container">
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
            <Magnifier class="magnifier-icon" @click="zoomImage(item.id)" />
          </div>
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
                  <PhoneIcon id="phone" />
                </div>
                <div
                  class="icon"
                  :class="{ active: item.tabletView }"
                  @click="changeView($event, item.id)"
                  v-if="item.tabletImg !== ''"
                >
                  <TabletIcon id="tablet" />
                </div>
                <div
                  class="icon"
                  :class="{ active: item.desktopView }"
                  @click="changeView($event, item.id)"
                  v-if="item.desktopImg !== ''"
                >
                  <LaptopIcon id="desktop" />
                </div>
              </div>
              <ArrowRight
                @click="swiping($event)"
                id="forward"
                class="mobile"
              />
              <div class="counter">
                {{ item.id }} / {{ store.projects.length }}
              </div>
            </div>

            <div class="project__heading__container">
              <h4 class="project__heading">{{ item.name }}</h4>
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
.magnifier-icon {
  fill: var(--text-color);
  position: absolute;
  bottom: 1.5rem;
  left: 75%;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
}
.magnifier-icon:hover {
  fill: var(--bg-color);
  background-color: var(--text-color);
}
.image__container {
  height: 53rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-shadow: var(--box-shadow-middle);
  background-color: var(--bg-color-first-level);
  border-radius: 0.7rem;
  position: relative;
  border: 0.5px solid var(--h3-color);
}
.content__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.flex__container {
  /*  padding-inline: 1.5rem; */
  display: flex;
  justify-content: center;
  background-color: transparent;
}
/* .mobile {
  position: absolute;
}
#back {
  left: 2%;
  top: 1.5rem;
}
#forward {
  right: 2%;
  top: 1.5rem;
} */
.desktop-arrow {
  display: none;
}
.project__description {
  margin-block: 0.5rem 0rem;
  text-align: center;
}

.icon__container {
  margin-top: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.view__container {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.icon {
  display: flex;
  box-shadow: var(--box-shadow-middle);
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
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
  bottom: -2rem;
  right: 1rem;
  font-size: 1.3rem;
  font-family: "RobotoReg";
}

.project__stack {
  text-align: center;
  margin-bottom: 3rem;
}
.bold {
  font-family: "RobotoReg";
  text-align: center;
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
  width: 100%;
  padding-bottom: 1rem;
}
@media (min-width: 580px) {
  .content__container {
    /*  background-color: var(--bg-color-second-level); */
    box-shadow: var(--box-shadow-small);
    border-radius: 0.7rem;
    /*   padding-top: var(--spacing-wide); */
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
  .image__container {
    width: 30vw;
  }
  .project__container {
    padding-bottom: 5rem;
  }
  .content__container {
    max-width: 30vw;
    justify-content: flex-start;
    padding: 5rem 2.5rem 3rem 2rem;
    border-radius: 0.7rem;
    background-color: var(--bg-color-second-level);
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
