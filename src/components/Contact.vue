<script setup lang="ts">
import Mail from "./icons/contacts/Mail.vue";
import Location from "./icons/contacts/Location.vue";
import LinkedIn from "./icons/contacts/LinkedIn.vue";
import Xing from "./icons/contacts/Xing.vue";
import Github from "./icons/Github.vue";
</script>

<template>
  <article class="contact__container container" id="contact">
    <h3>Contact</h3>
    <div class="content__container">
      <div class="contact__content">
        <a href="mailto:katja-roehlig@mail.de" class="contact__link"
          ><Mail class="contact__icon" /> <span>katja-roehlig@mail.de</span></a
        >
        <a
          href="https://de.linkedin.com/in/katja-r%C3%B6hlig-379a96259"
          class="contact__link"
          ><LinkedIn class="contact__icon" /><span>LinkedIn</span></a
        >

        <a
          href="https://www.xing.com/profile/Katja_Roehlig/cv"
          class="contact__link"
        >
          <Xing class="contact__icon" /><span>Xing</span></a
        >

        <a href="https://github.com/katja-roehlig" class="contact__link">
          <Github class="contact__icon" /> <span>Github</span></a
        >
        <div class="contact__link">
          <Location class="contact__icon" />
          <span class="contact__location">Leipzig</span>
        </div>
      </div>
    </div>
  </article>
</template>
<style scoped>
.content__container {
  padding: var(--spacing-small) 0rem 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.contact__link {
  color: inherit;
  text-decoration: none;
  display: flex;
  gap: 2rem;
  padding-block: 0.5rem 0;
  font-family: "RobotoReg";
}
.contact__icon {
  width: 2rem;
  color: var(--h3-color);
  fill: var(--h3-color);
}

.contact__location {
  margin: 0;
}

/*media-queries ************************************************************/
@media (min-width: 1100px) {
  .contact__container {
    padding-block: 0rem 5rem;
    width: 50rem;
    margin-inline: auto;
  }
}
</style>
