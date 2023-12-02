<script setup>
  document.body.classList.remove(...document.body.classList);
  document.body.classList.add('template-play')
</script>

<template>
  <main id="play">
    <h1>Play</h1>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
