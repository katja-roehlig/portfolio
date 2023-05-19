<script setup lang="ts">
import { ref } from "vue";
import ArrowDown from "./icons/ArrowDown.vue";
import ArrowUp from "./icons/ArrowUp.vue";
let isViewable = ref(true);
function readMore() {
  return (isViewable.value = !isViewable.value);
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
            Since November 2022, I have a certificate as a web developer from
            Coding Bootcamps Europe. Now I am eager to put my skills into
            practice.
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
          @click="readMore"
          class="invisible"
        />
      </div>
    </div>
  </article>
</template>
<style scoped>
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
.about__container {
  text-align: center;
}
.about__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about__foto {
  height: 18rem;
  border-radius: 0.6rem;
  box-shadow: 0px 2px 6px var(--accent-color-transparent),
    0px -2px 4px rgba(var(--text-color), 0.2);
}
.about__text {
  margin-top: 0;
}
.text {
  line-height: 2.1rem;
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
  }
  .about__container {
    text-align: left;
    padding: 3.5rem 4.5rem 3rem 4rem;
  }
  .about__foto {
    height: 25rem;
  }
  .foldout {
    display: block;
  }
  .arrow-down {
    display: none;
  }
}
.about__subheading {
  margin-top: 0;
}

@media (min-width: 1100px) {
  .about__foto {
    height: 30rem;
  }
  .about__container {
    padding: 3.5rem 9.5rem 5rem 9rem;
  }
  .about__content {
    gap: 9rem;
  }
}
.text {
  max-width: 60ch;
  line-height: 2.5rem;
}
</style>
