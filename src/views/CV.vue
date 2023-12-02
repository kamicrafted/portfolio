<script setup>
  document.body.classList.remove(...document.body.classList);
  document.body.classList.add('template-cv')
</script>

<template>
  <main id="cv">
    <h1>CV</h1>
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
