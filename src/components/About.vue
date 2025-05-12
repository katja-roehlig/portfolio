<script setup lang="ts">
import { ref } from "vue";
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
      <img
        src="../assets/ich_schmunzelnd_1.jpg"
        alt="a picture of me"
        class="about__foto"
      />
      <div class="about__info">
        <div class="text-left">
          <h4 class="about__subheading">Hey there,</h4>
          <p class="about__text text">
            I'm Katja. I am a frontend developer with a lot of passion for
            coding and design.
            <br /><br />
            Over the last 1.5 years, I have been working on a very interesting
            research project at the Institute for Applied Informatics(InfAI) in
            Leipzig, the Toolbox Datenkompentenz. Our goal was creating a
            website that brings people closer to data literacy.
            <br />
            We worked in a monorepo with Next.js, ChakraUI, Strapi Cms, Keycloak
            and Piwik Pro. I also got a certification in Figma and got the
            chance to realize some small designs. <br /><br />
            Unfortunately, the project has come to an end and I am now looking
            for new exciting challenges.
          </p>
        </div>

        <p
          class="text text-right"
          :class="{ 'arrow-down': !isViewable, foldout: isViewable }"
        >
          I am an empathetic person. It makes me happy to collaborate with other
          people, solve technical or design problems, try new things and expand
          my knowledge.<br />
          Besides coding, I am interested in drawing, sewing, psychology and
          dancing.
        </p>
        <ArrowDown
          :class="{ 'arrow-down': isViewable, 'arrow-up': !isViewable }"
          @click="readMore()"
        />
        <ArrowUp
          :class="{ 'arrow-down': !isViewable, 'arrow-up': isViewable }"
          @click="readMore()"
          class="foldout-arrow"
        />
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
}

.about__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-small) 3rem 3rem 3rem;
}
.about__foto {
  height: 18rem;
  border-radius: 0.6rem;
  box-shadow: var(--box-shadow-middle);
  margin-bottom: 1rem;
}
.about__text {
  margin-top: 0rem;
}
.text {
  line-height: 2.1rem;
  white-space: wrap;
  hyphens: auto;
}
.about__subheading {
  font-size: 1.4rem;
  padding-block: 1rem 0.5rem;
  text-align: left;
}

/* media-queries **************************************************** */

@media (min-width: 768px) {
  .about__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    padding-inline: 4.5rem 4rem;
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
}

@media (min-width: 960px) {
  .foldout {
    display: block;
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
    padding: 2rem 9.5rem 0rem 9rem;
  }
  .text {
    max-width: 60ch;
    line-height: 2.5rem;
  }
}
</style>
