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


const currentIndex = ref(0);

const currentProject = computed(() => projectBox[currentIndex.value]);

const isSelectedMobile = ref("phone");
const selectedWideScreen = ref<Record<number, string>>({});


const currentView = ref<"phone" | "tablet" | "desktop">("phone");

const setSelectedView = (view: "phone" | "tablet" | "desktop") => {
  currentView.value = view;
};
const getAvailableView = () => {
  const currentProject = projectBox[currentIndex.value];

  if (
    (currentView.value === "tablet" && !currentProject.tabletImg) ||
    (currentView.value === "desktop" && !currentProject.desktopImg)
  ) {
    currentView.value = "phone";
  }
};

const nextProject = () => {
  if (document.startViewTransition) {
    document.documentElement.classList.add('forward');
    document.documentElement.classList.remove('back');
    const transition = document.startViewTransition(() => {

      if (currentIndex.value < projectBox.length - 1) {
        currentIndex.value++
      } else {
        currentIndex.value = 0;
      }

      getAvailableView();
    });
    transition.finished.then(() => {
      document.documentElement.classList.remove('forward');
    });
  }
};

const prevProject = () => {
  if (document.startViewTransition) {
    document.documentElement.classList.add('back');
    document.documentElement.classList.remove('forward');
    const transition = document.startViewTransition(() => {

      if (currentIndex.value > 0) {
        currentIndex.value--
      } else {
        currentIndex.value = projectBox.length - 1;
      }


      getAvailableView();
    });
    transition.finished.then(() => {
      document.documentElement.classList.remove('back');
    });
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
    <h3>Frontend-Projects</h3>

    <div class="flex__container" :style="{ viewTransitionName: 'project-card' }">
      <div v-for="(item, index) in projectBox" :key="item.id" class="card__container" v-show="index === currentIndex">
        <div class="image__container">
          <div class="device__wrapper">
            <transition name="fade">
              <Phone class="position" :phone="item.phoneImg" v-show="currentView === 'phone'"
                @click="zoomImage(item.id)" :class="{ zoom: item.isZoomed }" />
            </transition>
            <transition name="fade">
              <Tablet class="position" :tablet="item.tabletImg" v-show="currentView === 'tablet'"
                @click="zoomImage(item.id)" :class="{ big: item.isZoomed }" />
            </transition>
            <transition name="fade">
              <Desktop class="position" :desktop="item.desktopImg" v-show="currentView === 'desktop'"
                @click="zoomImage(item.id)" :class="{ big: item.isZoomed }" />
            </transition>
            <Magnifier class="magnifier-icon" @click="zoomImage(item.id)" />
          </div>
          <!-- Icons to switch view -->
          <div class="view__container">
            <div class="icon" @click="setSelectedView('phone')" :class="{ active: currentView === 'phone' }"
              v-if="item.phoneImg !== ''">
              <PhoneIcon id="phone" />
            </div>
            <div class="icon" @click="setSelectedView('tablet')" :class="{ active: currentView === 'tablet' }"
              v-if="item.tabletImg !== ''">
              <TabletIcon id="tablet" />
            </div>
            <div class="icon" @click="setSelectedView('desktop')" :class="{ active: currentView === 'desktop' }"
              v-if="item.desktopImg !== ''">
              <LaptopIcon id="desktop" />
            </div>
          </div>
        </div>

        <div class="desktop__view">
          <ProjectDescription :github="item.github" :web="item.web" class="description">
            <h4>{{ item.name }}</h4>
            <div class="project__description">
              <p>
                {{ item.text1 }}<br />
                {{ item.text2 }}
              </p>
              <p>
                <span class="bold"> Tech Stack: </span> {{ item.techStack }}
              </p>
            </div>
          </ProjectDescription>
        </div>
      </div>
    </div>
    <div class="project__slider-controls">


      <button type="button" class="slider-btn" @click="prevProject">
        <ArrowLeft />
      </button>

      <div class="slider-dots">
        <span v-for="(slide, sIndex) in projectBox" :key="slide.id" class="slider-dot"
          :class="{ active: currentIndex === sIndex }">

        </span>
      </div>

      <button type="button" class="slider-btn" @click="nextProject">
        <ArrowRight />
      </button>

    </div>
  </article>
</template>

<!--* CSS ************************************************************************************************************** -->
<style scoped>
.project__container {
  position: relative;
}


h3 {
  margin-bottom: 0;
}

.flex__container {
  display: flex;
  justify-content: center;
  background-color: transparent;
  flex-wrap: nowrap;
  view-transition-name: project-card;
  margin-top: 3rem;
  min-height: 50rem;
  height: 72rem;
}

.card__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  transition: transform 0.5s linear, opacity 0.5s linear;


}

.device__wrapper {
  position: relative;
  width: 100%;
  height: 41rem;
  overflow: hidden;
  margin-bottom: 1rem;


}

.image__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

}

.deskription {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 1rem;
  height: 28rem;
}

.project__description {
  margin-bottom: 1rem;
  padding-inline: 2rem;
  max-width: 70ch;
  ;

}

.project__description p {
  text-align: center;
  ;
}

.view__container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1rem;
  border-top: 1px solid var(--disabled-color);
  width: 26rem;
  height: 7rem;

}

.button__arrow {
  background: none;
  border: none;
  padding: 1rem;
  cursor: pointer;
}

.position {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  transition: transform 1s ease-out;
}

.magnifier-icon {
  fill: var(--text-color);
  position: absolute;
  bottom: 3.5rem;
  left: 85%;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  margin-left: 0rem;
}

.magnifier-icon:hover {
  fill: var(--bg-color);
  background-color: var(--text-color);
}


.icon {
  display: flex;
  box-shadow: var(--box-shadow-small);
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: var(--icon-bg-color);
}

.icon:hover {
  color: var(--bg-color);
  background-color: var(--text-color);
}

.active {
  color: var(--bg-color);
  background-color: var(--primary-to-secondary);
}



.bold {
  font-family: "RobotoReg";
  text-align: center;
}

.zoom {
  transition: transform 1s ease-out;
  transform: translate(-50%, -75%) scale(1.5);
  transform-origin: center center;
  z-index: 1;
}

.big {
  transition: transform 1s ease-out;
  transform: translate(-50%, -50%) scale(1.5);
  transform-origin: center center;
  z-index: 1;
}


.project__slider-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: var(--bg-color-second-level);
  border-radius: 0.7rem;
  padding-block: 3rem 3rem;
  margin-top: 2rem;
}

.slider-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
}

.slider-btn:hover {
  transform: scale(1.2);
}

.slider-dots {
  display: flex;
  gap: 1rem;
}

.slider-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--disabled-color);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.slider-dot.active {
  background-color: var(--accent-secondary);
  transform: scale(1.2)
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

@media (min-width: 960px) {

  .flex__container {
    height: 5rem;
    padding-inline: 3.5rem 2rem;
  }

  .card__container {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }

  .image__container {
    width: 42%;
    justify-content: center;
    border-right: 1px solid var(--disabled-color);
    margin-top: 1rem;
    padding-right: 2rem;
  }

  .device__wrapper {
    height: 40rem;
    margin-bottom: 1rem;
  }

  .desktop__view {
    width: 58%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
  }

  .description {
    width: 80%;
    height: fit-content;
    align-items: flex-start;
    align-self: center;

  }

  .project__description {
    background: var(--bg-color-second-level);
    border-radius: 0.7rem;
    padding: 2rem;

  }

  .project__slider-controls {
    background-color: var(--bg-color-second-level);
    border-radius: 0.7rem;
    padding-block: 4rem 4rem;
  }

  .magnifier-icon {
    margin-left: 0rem;
  }
}

@media (min-width: 1100px) {
  .image__container {
    padding-right: 0;
    ;
  }
}
</style>
<style>
html.forward::view-transition-old(project-card) {
  animation: slideOutLeft 0.65s ease-in-out both;
}

html.forward::view-transition-new(project-card) {
  animation: slideInRight 0.65s ease-in-out both;
}

html.back::view-transition-old(project-card) {
  animation: slideOutRight 0.65s ease-in-out both;
}

html.back::view-transition-new(project-card) {
  animation: slideInLeft 0.65s ease-in-out both;
}
</style>
