<script setup lang="ts"></script>

<template>
  <article class="about__container">
    <h3>About Me</h3>
    <div class="about__content">
      <img
        src="../assets/ich_schmunzelnd_1.jpg"
        alt="a picture of me"
        class="about__foto"
      />
      <p class="about__text">
        The combination of creativity and a logical-analytical approach
        distinguish me. I think through new ideas intellectually and
        analytically and examine them for errors, inconsistencies and
        feasibility. I recognize patterns and apply them to new situations.
        <!--In doing so, I work strategically and in an
        organized manner. I always keep the big picture in mind, yet pay attention
        to detail and quality.<br />
        I have a very well-developed imagination and a first-class sense of
        aesthetics. --><br />
        A great inquisitiveness also characterizes me. I like to work myself
        into new facts, ideas and concepts and develop from them other
        perspectives, ideas, theories and concepts.
      </p>
    </div>
  </article>
</template>
<style scoped>
.about__container {
  text-align: center;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
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
  height: 20rem;
  border-radius: 0.6rem;
  box-shadow: 0px 2px 6px var(--accent-color-transparent),
    0px -2px 4px rgba(var(--text-color), 0.2);
}
</style>
