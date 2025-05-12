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
const animationDirection = ref("forward");

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

const visibleProjects = computed(() => {
  return projectBox.slice(
    currentIndex.value,
    currentIndex.value + numberOfCards.value
  );
});

const isSelected = ref("phone");

const nextProject = () => {
  if (currentIndex.value <= projectBox.length - 1) {
    currentIndex.value++;
    changeView();
    animationDirection.value = "forward";
  }
};

const prevProject = () => {
  console.log("Juhuu");
  if (currentIndex.value > 0) {
    currentIndex.value--;
    changeView();
    animationDirection.value = "back";
  }
};

const changeView = () => {
  if (!currentProject.tabletImg && isSelected.value === "tablet") {
    isSelected.value = "phone";
  }
  if (!currentProject.desktopImg && isSelected.value === "desktop") {
    isSelected.value = "phone";
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
    <TransitionGroup
      class="grid__container"
      :name="animationDirection === 'forward' ? animationDirection : 'back'"
      tag="div"
    >
      <div
        v-for="item in visibleProjects"
        :key="item.id"
        class="card__container"
      >
        <div class="image__container">
          <transition name="fade">
            <Phone
              class="position"
              :phone="item.phoneImg"
              v-show="isSelected === 'phone'"
              @click="zoomImage(item.id)"
              :class="{ zoom: item.isZoomed }"
            />
          </transition>
          <transition name="fade">
            <Tablet
              class="position"
              :tablet="item.tabletImg"
              v-show="isSelected === 'tablet'"
              @click="zoomImage(item.id)"
              :class="{ big: item.isZoomed }"
            />
          </transition>
          <transition name="fade">
            <Desktop
              class="position"
              :desktop="item.desktopImg"
              v-show="isSelected === 'desktop'"
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
                :class="{ active: isSelected === 'phone' }"
                @click="isSelected = 'phone'"
                v-if="item.phoneImg !== ''"
              >
                <PhoneIcon id="phone" />
              </div>
              <div
                class="icon"
                :class="{ active: isSelected === 'tablet' }"
                @click="isSelected = 'tablet'"
                v-if="item.tabletImg !== ''"
              >
                <TabletIcon id="tablet" />
              </div>
              <div
                class="icon"
                :class="{ active: isSelected === 'desktop' }"
                @click="isSelected = 'desktop'"
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
    </TransitionGroup>
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
  height: max-content;
}

.grid__container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  background-color: transparent;
  position: relative;
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
.forward-enter-active,
.forward-leave-active,
.forward-move {
  transition: opacity 0.3s linear, transform 0.5s ease;
}

.forward-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.forward-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.back-enter-active,
.back-leave-active,
.back-move {
  transition: opacity 0.3s linear, transform 0.5s ease;
}

.back-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}

.back-leave-to {
  opacity: 0;
  transform: translateX(100px);
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
  height: 54rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid var(--disabled-color);
  padding-bottom: 2.5rem;
  position: relative;
}
.content__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
@media (min-width: 580px) {
  .content__container {
    box-shadow: var(--box-shadow-small);
    border-radius: 0.7rem;
  }
}
.project__container {
  padding-bottom: var(--spacing-wide);
}

@media (min-width: 1100px) {
  .grid__container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 3rem;
    padding-inline: 9.5rem 9rem;
    margin-top: 5rem;
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
    top: 25.5rem;
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
