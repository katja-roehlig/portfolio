<script setup lang="ts">
import { ref } from "vue";
import Github from "./icons/Github.vue";
import LinkedIn from "./icons/contacts/LinkedIn.vue";
import ArrowDown from "./icons/ArrowDown.vue";
import ArrowUp from "./icons/ArrowUp.vue";
const isViewable = ref(true);
function readMore(): void {
  isViewable.value = !isViewable.value;
}
</script>

<template>
  <article class="about__container container" id="about">
    <h3>About Me</h3>
    <div class="about__content">
      <img src="../assets/ich_schmunzelnd_1.jpg" alt="a picture of me" class="about__foto" />
      <div class="about__info">
        <!-- <div> -->
        <h4 class="about__subheading">Hey there,</h4>
        <p class="about__text text">

          I'm Katja, I love building software that combines thoughtful user experiences with intelligent AI systems.
          <br /><br />
          I started my journey in frontend development because I loved building user interfaces.
          Over time, I became curious about everything that happens behind the scenes.
          That curiosity eventually led me to Python, FastAPI, databases and AI systems.
          Today, I enjoy building complete applications and understanding how all the pieces work together.
          <br /> <br />

          My current focus is on AI-supported software. I'm especially interested in building applications that solve
          real problems
          and create a great user experience.
          One example is <span>'Serenity'</span>, a personal project that combines long-term memory,
          semantic search and a multi-agent architecture.
        </p>
        <!-- </div> -->

        <p class="text about__text" :class="{ 'arrow-down': !isViewable, foldout: isViewable }">
          Before that, I spent 1.5 years working on a research project at the Institute for Applied Informatics (InfAI)
          in Leipzig.
          I'm also interested in usability and visual design, which has shaped the way I approach frontend development.
          <br />
          Outside of coding, you'll usually find me drawing, sewing, dancing or reading about psychology.
          That interest in psychology is also one of the reasons why Serenity exists.

        </p>
        <ArrowDown :class="{ 'arrow-down': isViewable, 'arrow-up': !isViewable }" @click="readMore()" />
        <ArrowUp :class="{ 'arrow-down': !isViewable, 'arrow-up': isViewable }" @click="readMore()"
          class="foldout-arrow" />
        <div class="about__wrapper">
          <a href="https://github.com/katja-roehlig/serenity" class="about__link">
            <Github class="about__icon" /> <span>Github</span>
          </a>
          <a href="https://de.linkedin.com/in/katja-r%C3%B6hlig-379a96259" class="about__link">
            <LinkedIn class="about__icon" /><span>LinkedIn</span>
          </a>
        </div>
      </div>

    </div>
  </article>
</template>
<style scoped>
.foldout-arrow {
  border-left-color: var(--h3-color);
  border-top-color: var(--h3-color);
}

.arrow-down {
  display: block;
}

.arrow-up {
  display: none;
}

.foldout {
  margin-top: 0;
  margin-bottom: 2rem;
  display: none;
}

.about__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.about__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: var(--spacing-small) 3rem;

}

.about__foto {
  height: 18rem;
  border-radius: 0.7rem;
  box-shadow: var(--box-shadow-middle);
  margin-bottom: 1rem;
}

.about__text {
  margin-top: 0rem;
  width: auto;
  padding-inline: 2rem;
  max-width: 70ch;
  ;
}

.text {
  line-height: 2.1rem;
  white-space: wrap;
  hyphens: auto;
}

.about__subheading {
  padding-block: 1rem 1rem;
  text-align: left;
}

.about__wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: auto;
  padding-inline: 2rem;
  margin-top: 3rem;
  ;
}

.about__link {
  text-decoration: none;
  margin-top: 1rem;
  padding: 1.2rem 2.5rem 0.9rem;
  /* padding: 0.8rem 1.5rem 0.6rem; */
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

.about__link:hover {
  color: var(--h3-color);
  background-color: var(--accent-primary);
  transform: scale(1.05);

}

.about__icon {
  width: 2rem;
  color: var(--icon-color);
  fill: var(--icon-color);
}


/* media-queries **************************************************** */

@media (min-width: 768px) {
  .about__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    padding-inline: 5rem 4rem;
  }

  .about__container {
    text-align: left;
    padding-bottom: 3rem;
  }

  .about__foto {
    height: 25rem;
  }

  .arrow-down {
    display: none;
  }

  .about__link {
    margin-top: 2rem;
  }

  .about__wrapper {
    gap: 5rem;
    margin-top: 1rem;
  }


}

@media (min-width: 960px) {
  .foldout {
    display: block;
  }

  .about__wrapper {
    gap: 15rem;
  }

}

@media (min-width: 1100px) {
  .about__foto {
    height: 30rem;
  }

  .about__container {
    padding-bottom: 5rem;
  }

  .about__content {
    gap: 9rem;
    padding: 2rem 9.5rem 4rem 9rem;
  }

  .text {
    max-width: 60ch;
    line-height: 2.5rem;
  }
}
</style>
