<script setup lang="ts">
import { onBeforeMount } from "vue";
import { projectStore } from "../../store/store";
import Phone from "./Phone.vue";
import Tablet from "./Tablet.vue";
import Desktop from "./Desktop.vue";
import { ref, computed, onMounted, onUnmounted } from "vue";
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
const screenWidth = ref(window.innerWidth);
const animationDirection = ref<"forward" | "back">("forward");
const animate = ref(false);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

const numberOfCards = computed(() => {
  return screenWidth.value >= 1100 ? 2 : 1;
});

const currentIndex = ref(0);
const currentProject = computed(() => projectBox[currentIndex.value]);

const isSelectedMobile = ref("phone");
const selectedWideScreen = ref<Record<number, string>>({});

const getSelectedView = (projectId: number) => {
  return screenWidth.value >= 1100
    ? selectedWideScreen.value[projectId] || "phone"
    : isSelectedMobile.value;
};

const setSelectedView = (projectId: number, view: string) => {
  if (screenWidth.value >= 1100) {
    selectedWideScreen.value[projectId] = view;
  } else {
    isSelectedMobile.value = view;
  }
};

const nextProject = () => {
  if (currentIndex.value + numberOfCards.value < projectBox.length - 1) {
    animationDirection.value = "forward";
    triggerAnimation();
    currentIndex.value += numberOfCards.value;
    getAvailableView();
  }
};

const prevProject = () => {
  if (currentIndex.value - numberOfCards.value >= 0) {
    animationDirection.value = "back";
    triggerAnimation();
    currentIndex.value -= numberOfCards.value;
    getAvailableView();
  }
};

const triggerAnimation = () => {
  animate.value = false;
  requestAnimationFrame(() => {
    animate.value = true;
  });
};

const getAvailableView = () => {
  if (
    (!currentProject.value.tabletImg && isSelectedMobile.value === "tablet") ||
    (!currentProject.value.desktopImg && isSelectedMobile.value === "desktop")
  ) {
    isSelectedMobile.value = "phone";
  }
};

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
    <button
      class="button__arrow button__arrow-desktop"
      :disabled="currentIndex === 0"
    >
      <ArrowLeft @click="prevProject" class="desktop" />
    </button>
    <div class="flex__container">
      <div
        v-for="(item, index) in projectBox"
        :key="item.id"
        class="card__container"
        v-show="index >= currentIndex && index < currentIndex + numberOfCards"
        :class="{
          'slide-forward': animationDirection === 'forward' && animate,
          'slide-back': animationDirection === 'back' && animate,
        }"
      >
        <div class="image__container">
          <transition name="fade">
            <Phone
              class="position"
              :phone="item.phoneImg"
              v-show="getSelectedView(item.id) === 'phone'"
              @click="zoomImage(item.id)"
              :class="{ zoom: item.isZoomed }"
            />
          </transition>
          <transition name="fade">
            <Tablet
              class="position"
              :tablet="item.tabletImg"
              v-show="getSelectedView(item.id) === 'tablet'"
              @click="zoomImage(item.id)"
              :class="{ big: item.isZoomed }"
            />
          </transition>
          <transition name="fade">
            <Desktop
              class="position"
              :desktop="item.desktopImg"
              v-show="getSelectedView(item.id) === 'desktop'"
              @click="zoomImage(item.id)"
              :class="{ big: item.isZoomed }"
            />
          </transition>
          <Magnifier class="magnifier-icon" @click="zoomImage(item.id)" />
        </div>

        <ProjectDescription
          :github="item.github"
          :web="item.web"
          class="description"
        >
          <div class="icon__container">
            <button
              class="button__arrow button__arrow-mobile"
              :disabled="currentIndex === 0"
              @click="prevProject"
            >
              <ArrowLeft class="mobile" />
            </button>
            <div class="view__container">
              <div
                class="icon"
                @click="setSelectedView(item.id, 'phone')"
                :class="{ active: getSelectedView(item.id) === 'phone' }"
                v-if="item.phoneImg !== ''"
              >
                <PhoneIcon id="phone" />
              </div>
              <div
                class="icon"
                @click="setSelectedView(item.id, 'tablet')"
                :class="{ active: getSelectedView(item.id) === 'tablet' }"
                v-if="item.tabletImg !== ''"
              >
                <TabletIcon id="tablet" />
              </div>
              <div
                class="icon"
                @click="setSelectedView(item.id, 'desktop')"
                :class="{ active: getSelectedView(item.id) === 'desktop' }"
                v-if="item.desktopImg !== ''"
              >
                <LaptopIcon id="desktop" />
              </div>
            </div>
            <button
              @click="nextProject"
              class="button__arrow button__arrow-mobile"
              :disabled="currentIndex + numberOfCards === projectBox.length"
            >
              <ArrowRight class="mobile" />
            </button>
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
    </div>
    <button
      @click="nextProject"
      class="button__arrow button__arrow-desktop button__arrow-right"
      :disabled="currentIndex + numberOfCards === projectBox.length"
    >
      <ArrowRight class="desktop" />
    </button>
  </article>
</template>

<!--* CSS ************************************************************************************************************** -->
<style scoped>
.button__arrow {
  background: none;
  border: none;
  padding: 1rem;
  cursor: pointer;
}
.card__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 2rem;
  min-height: max-content;
  transition: transform 0.5s linear, opacity 0.5s linear;
}

.flex__container {
  display: flex;
  justify-content: center;
  background-color: transparent;
  position: relative;
  flex-wrap: nowrap;
  overflow: hidden;
}
.position {
  position: absolute;
}
/* ***************** Transition-Classes*********************** */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* ************************* TransitionGroup-Classes ************************** */

.slide-forward {
  animation: slideInFromRight 0.8s linear;
}

.slide-back {
  animation: slideInFromLeft 0.8s linear;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.magnifier-icon {
  fill: var(--text-color);
  position: absolute;
  bottom: 3.5rem;
  left: 85%;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  margin-left: 1.5rem;
}
.magnifier-icon:hover {
  fill: var(--bg-color);
  background-color: var(--text-color);
}
.image__container {
  height: 50rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid var(--disabled-color);
  padding-bottom: 2.5rem;
  position: relative;
}

.button__arrow-desktop {
  display: none;
}
.button__arrow:hover .desktop,
.button__arrow:hover .mobile {
  border-color: var(--h4-color);
}
.button__arrow:disabled .desktop,
.button__arrow:disabled .mobile {
  border-color: var(--disabled-color);
  cursor: not-allowed;
}
.project__description {
  margin-block: 0.5rem 0rem;
  text-align: center;
  height: 44px;
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
  position: relative;
  width: 140px;
}

.icon {
  display: flex;
  box-shadow: var(--box-shadow-middle);
  width: 4.5rem;
  height: 4.5rem;
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
  background-color: var(--h3-color);
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
  height: 44px;
}
.bold {
  font-family: "RobotoReg";
  text-align: center;
}

.zoom {
  transition: transform 1s ease-out;
  transform: scale(1.5);
  transform-origin: 50% 10%;
  z-index: 1;
}
.big {
  transition: transform 1s ease-out;
  transform: scale(1.3);
  transform-origin: 50% 60%;
  z-index: 1;
}
.description {
  width: 100%;
  padding-bottom: 1rem;
}

.project__container {
  padding-bottom: var(--spacing-wide);
}

@media (min-width: 1100px) {
  .flex__container {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 6rem;
    padding-inline: 9.5rem 9rem;
  }
  .image__container {
    width: 30vw;
  }
  .project__container {
    padding-bottom: 5rem;
  }
  .card__container {
    max-width: 30vw;
    padding: 0rem 2.5rem 3rem 2rem;
    margin-bottom: 2rem;
    margin-top: var(--spacing-small);
    /*  border-radius: 0.7rem;
    background-color: var(--bg-color-second-level);
    box-shadow: var(--box-shadow); */
  }

  .card-visibility:nth-child(2) {
    display: block;
  }

  .button_arrow-mobile,
  .mobile {
    display: none;
  }
  .icon__container {
    justify-content: center;
  }

  .button__arrow-desktop {
    display: inline-block;
    position: absolute;
    top: 38rem;
    z-index: 1000;
  }

  .button__arrow-desktop.button__arrow-right {
    right: 0px;
  }
  .desktop {
    width: 1.7rem;
    height: 1.7rem;
    border-width: 5px;
    margin-inline: 3.5rem;
  }
}
</style>
