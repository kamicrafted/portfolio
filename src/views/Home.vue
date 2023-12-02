<script setup>
  import Intro from '../components/Intro.vue'
  document.body.classList.remove(...document.body.classList);
  document.body.classList.add('template-home');
</script>

<template>
  <main id="home">
    <img id="avatar" src="/src/assets/img/avatar.png" alt="">
    <Intro />
  </main>
</template>

<style lang="scss" scoped>
#home {
  margin: 2rem auto;
  padding: 2rem 4rem;
  display: flex;
}

#avatar {
  position: relative;
  left: -10vw;
  max-height: 60vh;
  max-height: 100vh;
  // margin-right: 5rem;
  pointer-events: none;
}

@media (max-width: 80rem) { // > 1280, tablet and up
  #avatar {
    height: 30rem;
    width: auto;
    margin-top: 2rem;
    max-height: auto;
    left: -7vw;
  }

  #home {
    display: flex;
    flex-direction: column;
    padding: 0 4rem;
  }
}

@media (max-width: 40rem) { // < 640, mobile landscape and down
  #home {
    padding: 0 4rem;
  }
}
</style>