<template>
  <div class="heading" id="home">
    <h1 class="heading__main">Katja Röhlig</h1>
    <h2 class="heading__sub">Frontend Developer</h2>
  </div>
</template>
<style scoped>
.heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
}
.heading__main,
.heading__sub {
  margin: 0;
  font-family: "AtmaMed";
  color: var(--text-color);
  font-size: 1.9rem;
  text-transform: none;
  letter-spacing: 0.1rem;
}
.heading__main {
  -webkit-text-stroke: 2px var(--heading-color);
  color: var(--bg-color);
  text-transform: uppercase;
  font-family: "AtmaBo";
  font-size: 4rem;
  margin-top: 1.5rem;
  filter: drop-shadow(0px 4px 4px var(--drop-shadow-color));
  letter-spacing: 0.2rem;
}

/* media-queries ************************************************************* */
@media (min-width: 768px) {
  .heading__main {
    -webkit-text-stroke: 3px var(--heading-color);
    font-size: 6.5rem;
    margin-top: 4rem;
    letter-spacing: 0.4rem;
  }
  .heading__sub {
    font-size: 3rem;
    margin-block: 1rem 1rem;
  }
}
</style>
