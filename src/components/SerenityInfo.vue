<script setup lang="ts">
import { computed, ref } from "vue";
import Magnifier from "./icons/Magnifier.vue";
import { projectStore } from "../../store/store";
import ArrowLeft from "./icons/ArrowLeft.vue";
import ArrowRight from "./icons/ArrowRight.vue";
import Github from "./icons/Github.vue";


const store = projectStore();
const slides = store.serenitySlides
const activeSlideId = ref<number>(1)

const currentSlide = computed(() => {
    return slides.find(slide => slide.id === activeSlideId.value)
})

function nextSlide(): void {

    if (document.startViewTransition) {
        document.documentElement.classList.add('forward');
        document.documentElement.classList.remove('back');

        const transition = document.startViewTransition(() => {
            if (activeSlideId.value === slides.length) {
                activeSlideId.value = 1;
            } else {
                activeSlideId.value++
            }
        });
        transition.finished.then(() => {
            document.documentElement.classList.remove('forward')
        })
    }
}
function prevSlide(): void {

    if (document.startViewTransition) {
        document.documentElement.classList.add('back');
        document.documentElement.classList.remove('forward');
        const transition = document.startViewTransition(() => {
            if (activeSlideId.value === 1) {
                activeSlideId.value = slides.length
            } else {
                activeSlideId.value--
            }
        });
        transition.finished.then(() => {
            document.documentElement.classList.remove('back')
        });
    }
}



const isZoomed = ref(false)
function toggleZoom(): void {
    isZoomed.value = !isZoomed.value;
}
</script>
<template>
    <article class="info__container">

        <div class="info__content-wrapper">

            <h4>What is Serenity?</h4>
            <div class="info__content">

                <p>Serenity is the final project of my eight-month Full-Stack & AI program.</p>
                <p>
                    I built it from scratch to explore how modern AI applications can maintain meaningful long-term
                    conversations by combining semantic memory, multi-agent workflows and intelligent context retrieval.
                </p>
                <p>
                    The goal was not just to build another chatbot, but to design a complete AI application with a React
                    frontend, a FastAPI backend and a memory system that helps users better understand themselves over
                    time.
                </p>

            </div>
            <h4>Tech Stack</h4>
            <div class="info__techstack">

                <p class="info__techstack-item"><span class="info__techstack-heading">Frontend: </span> React, CSS
                    Modules, Radix UI, React Hot Toast, Phosphor Icons</p>
                <p class="info__techstack-item"><span class="info__techstack-heading">Backend: </span>FastAPI, Python,
                    SQLAlchemy, LangChain, Langgraph, OAuth2</p>
                <p class="info__techstack-item"><span class="info__techstack-heading">Database: </span>SQLite. ChromaDB
                </p>
                <p class="info__techstack-item"><span class="info__techstack-heading">AI & Observability: </span> OpenAI
                    GPT-4o-mini, OpenAI GPT-4.1-mini, Taviliy Search, Langfuse</p>
            </div>
            <div class="info__link-container">More information on:

                <a href="https://github.com/katja-roehlig/serenity" class="info__link">
                    <Github class="info__icon" />
                    <span>Github</span>
                </a>

            </div>
        </div>
        <figure class="info__slider-container">
            <div class="info__slider-wrapper">

                <img v-show="currentSlide" :src="currentSlide?.src" alt="Photos of the Serenity Webapp"
                    class="info__slider-img" :class="{ zoom: isZoomed }"
                    :style="{ viewTransitionName: 'serenity-slider-img' }" @click="toggleZoom()">

                <Magnifier class="magnifier-icon" @click="toggleZoom()" v-if="!isZoomed" :class="{
                    light:
                        activeSlideId === 1
                }" />
            </div>
            <figcaption v-if="currentSlide" class="info__slider-caption">
                {{ currentSlide.caption }}
            </figcaption>
            <div v-if="!isZoomed" class="info__slider-controls">
                <button type="button" class="slider-btn" @click="prevSlide">
                    <ArrowLeft />
                </button>

                <div class="slider-dots">
                    <span v-for="slide in slides" :key="slide.id" class="slider-dot"
                        :class="{ active: activeSlideId === slide.id }">

                    </span>
                </div>
                <button type="button" class="slider-btn" @click="nextSlide">
                    <ArrowRight />
                </button>
            </div>
        </figure>

    </article>
</template>
<style scoped>
.info__container {
    padding: 2rem 2rem;
    padding-bottom: 0;
    position: relative;
    background-color: transparent;
    margin-top: 0;
}

h4 {
    padding-bottom: 0;
}


.info__content-wrapper {
    display: flex;
    flex-direction: column;
}



.info__techstack,
.info__content {
    border-radius: 0.7rem;
    margin-bottom: 2rem;
}

.info__content p,
.info__techstack p {
    max-width: 70ch;
    margin-inline: auto;
    line-height: 2.1rem;
}

.info__techstack-heading {
    font-family: "RobotoMed";
}

.info__slider-container {
    max-width: 700px;
    width: 100%;
    margin: 4rem auto 0rem;
    overflow: visible;
    position: relative;

}

.info__slider-wrapper {
    position: relative;
    width: 100%;
    display: inline-block;
}

.info__slider-img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
    box-shadow: var(--box-shadow-small);
    transition: transform 1s ease-out;
    position: relative;
    z-index: 1;
    cursor: zoom-out;
    view-transition-name: serenity-slider-img;

}

.info__slider-img.zoom {
    cursor: zoom-in
}

.info__slider-caption {
    font-size: 1.3rem;
    color: var(--figcaption-color);
    line-height: 1.4;
    font-style: italic;
}

.magnifier-icon {
    fill: #1b1a2e;
    position: absolute;
    bottom: 0rem;
    right: 0.8rem;
    z-index: 2;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
}

.magnifier-icon.light {
    fill: white
}

.magnifier-icon:hover {
    fill: var(--bg-color);
    background-color: var(--text-color);
}


.zoom {
    transform: scale(1.3);
    transform-origin: 50% 10%;
    z-index: 999;
}

.info__slider-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    background-color: var(--bg-color-second-level);
    border-radius: 0.7rem;
    padding-block: 3rem 3rem;
    margin-inline: -2rem;
    margin-top: 3rem;
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

.info__link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 2.5rem 1rem;
    border-top: 1px solid var(--disabled-color);
    margin-inline: auto;
    width: 26rem;
}

.info__link {
    text-decoration: none;
    margin-top: 1rem;
    padding: 1.2rem 2.5rem 0.9rem;
    /* padding: 0.8rem 3.5rem 0.6rem; */
    align-items: center;
    justify-content: center;
    color: black;
    font-family: RobotoReg;
    display: flex;
    gap: 1rem;
    box-shadow: var(--box-shadow-middle);
    border-radius: 1rem;
    background-color: var(--accent-secondary);

}

.info__link:hover {
    color: var(--h3-color);
    background-color: var(--accent-primary);
    transform: scale(1.05);

}

.info__icon {
    width: 2rem;
    color: var(--icon-color);
    fill: var(--icon-color);
}

@media (min-width: 768px) {

    .info__content,
    .info__techstack {
        background-color: var(--bg-color-second-level);
        margin-top: 2.5rem;
        padding: 2rem 2.5rem;
        box-shadow: var(--box-shadow-small-list);
        margin-bottom: 6rem;
    }

    .info__container {
        padding-inline: 4rem;
        ;
    }

    .info__slider-controls {
        margin-inline: -4rem;
    }

    .info__link-container {
        margin-bottom: 1rem;
        padding-block: 0.5rem 1rem;
        border-top: none;
    }
}

@media (min-width: 960px) {

    .info__slider-container {
        background-color: var(--bg-color-second-level);
        width: 100%;
        padding: 2.5rem;
        padding-bottom: 4rem;
        border-radius: 0.7rem;
        box-shadow: var(--box-shadow-small-list);
        margin-inline: auto;
    }

    .info__container {
        padding-inline: 4rem;
        padding-bottom: 5rem;
    }

    .info__slider-controls {
        background-color: transparent;
        padding-block: 0;
        margin-inline: 0;
        padding-top: 1rem;
    }

    .info__techstack,
    .info__content {
        margin-bottom: 5rem;
    }

    .info__link-container {
        margin-bottom: 2rem;
    }
}

@media (min-width: 1100px) {
    .info__container {
        padding-bottom: 5rem;
        padding-inline: 9.5rem 9rem;

    }

    .info__content,
    .info__techstack {
        margin-bottom: 6rem;
    }
}
</style>

<style>
html.forward::view-transition-old(serenity-slider-img) {
    animation: slideOutLeft 0.6s ease-in-out both;
}

html.forward::view-transition-new(serenity-slider-img) {
    animation: slideInRight 0.6s ease-in-out both;
}

html.back::view-transition-old(serenity-slider-img) {
    animation: slideOutRight 0.6s ease-in-out both;
}

html.back::view-transition-new(serenity-slider-img) {
    animation: slideInLeft 0.6s ease-in-out both;
}

@keyframes slideOutLeft {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(-100px);
        opacity: 0;
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(100px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(100px);
        opacity: 0;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
