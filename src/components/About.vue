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
  <article class="about__container" id="about">
    <h3>About Me</h3>
    <div class="about__content">
      <img
        src="../assets/ich_schmunzelnd_1.jpg"
        alt="a picture of me"
        class="about__foto"
      />
      <h4 class="about__subheading">Hey there,</h4>
      <p class="about__text">
        I'm Katja. I am a frontend developer with a lot of passion for coding
        and design.
        <br /><br />
        Since November 2022, I have a certificate as a web developer from Coding
        Bootcamps Europe. Now I am eager to put my skills into practice.
      </p>

      <p
        class="foldout__text"
        :class="{ 'arrow-down': !isViewable, 'arrow-up': isViewable }"
      >
        I am an empathetic person. It makes me happy to collaborate with other
        people, solve technical or design problems, try new things and expand my
        knowledge.<br />
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
      />
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
.foldout__text {
  margin-top: 0;
  margin-bottom: 2rem;
}
.about__container {
  text-align: center;
  padding: 1.5rem 2.5rem 3rem 2rem;
  box-shadow: 0px 6px 6px var(--accent-color-transparent),
    0px -4px 8px rgba(var(--text-color), 0.2);
  background-color: rgba(var(--bg-color), 0.6);
  border-radius: 0.7rem;
  margin-top: 3rem;
  line-height: 2.1rem;
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
.about__subheading {
  align-self: flex-start;
  font-size: 1.4rem;
  padding-block: 1rem 0.5rem;
}
</style>
