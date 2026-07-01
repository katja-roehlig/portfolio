<script setup lang="ts">
import Mail from "./icons/contacts/Mail.vue";
import Location from "./icons/contacts/Location.vue";
import LinkedIn from "./icons/contacts/LinkedIn.vue";
import Xing from "./icons/contacts/Xing.vue";
import Github from "./icons/Github.vue";
import Paragraph from "./icons/contacts/Paragraph.vue";
import { ref } from "vue";

const impressumModal = ref<HTMLDialogElement | null>(null)

function openImpressum(): void {
  impressumModal.value?.showModal();
}

function closeImpressum(): void {
  impressumModal.value?.close()
}
</script>

<template>
  <article class="contact__container container" id="contact">
    <h3>Contact</h3>
    <div class="content__container">
      <div class="contact__content">
        <a href="mailto:katja-roehlig@mail.de" class="contact__link">
          <Mail class="contact__icon" /> <span>katja-roehlig@mail.de</span>
        </a>
        <a href="https://de.linkedin.com/in/katja-r%C3%B6hlig-379a96259" class="contact__link">
          <LinkedIn class="contact__icon" /><span>LinkedIn</span>
        </a>

        <a href="https://www.xing.com/profile/Katja_Roehlig/cv" class="contact__link">
          <Xing class="contact__icon" /><span>Xing</span>
        </a>

        <a href="https://github.com/katja-roehlig" class="contact__link">
          <Github class="contact__icon" /> <span>Github</span>
        </a>
        <div class="contact__link">
          <Location class="contact__icon" />
          <span class="contact__location">Leipzig</span>
        </div>
        <div class="contact__link" @click="openImpressum">
          <Paragraph class="contact__icon" />
          <span>Impressum</span>
        </div>

      </div>
    </div>
    <dialog ref="impressumModal" class="impressum-modal">
      <div class="modal-content">
        <h4>Impressum</h4>
        <p>Angaben gemäß § 5 TMG:</p>

        <p>
          Katja Röhlig<br />
          c/o Christoph Unger <br />
          Beiertheimer Allee 32<br />
          76137 Karlsruhe
        </p>

        <h4>Kontakt:</h4>
        <p>E-Mail: katja-roehlig@mail.de</p>
        <button type="button" class="close-btn" @click="closeImpressum">
          Schließen
        </button>
      </div>
    </dialog>
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
  padding: 0.5rem 10px 0;
  font-family: "RobotoReg";
  cursor: pointer;
}

.contact__link:hover {
  color: var(--h3-color);
  background-color: var(--link-bg-color);
  border-radius: 5px;
}

.contact__icon {
  width: 2rem;
  color: var(--icon-color-dark);
  fill: var(--icon-color-dark);
}

.contact__location {
  margin: 0;
}

.impressum-modal {
  border: none;
  border-radius: .7rem;
  padding: 4rem 2rem;
  max-width: 400px;
  width: 90%;
  box-shadow: var(--box-shadow-middle);
  background-color: white;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-content h4 {
  padding: 0;
}

.impressum-modal[open] {
  animation: fadeIn 0.3s ease-out;
}


.impressum-modal::backdrop {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
}

.close-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 3.5rem 0.6rem;
  border: none;
  background-color: var(--accent-secondary);
  border-radius: 0.5rem;
  cursor: pointer;
  color: black;
}

.close-btn:hover {
  color: var(--h3-color);
  background-color: var(--accent-primary);
  transform: scale(1.05);

}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
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
