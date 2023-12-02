<script setup>
import { useStringStore } from '../stores/strings'

const gigStrings = useStringStore()
</script>

<template>
  <div class="project-card">
    
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/vars';
@import '../styles/easing';

.project-card {
  position: relative;
  height: 40vh;
  background: white;
  border-radius: .5rem;
  box-shadow: 0 20px 50px -10px rgba(black, .5);
  transition: all .25s $easeInOutSine;
}

@media (min-width: 1024px) {
  .project-card {
    &:hover {
      z-index: 50;
      transform: scale(1.1);
      box-shadow: 0 80px 40px -40px rgba(black, .5);
    }
  }
}

@media (max-width: 1023px) {
  .project-card {
    background-color: #000;
    margin-bottom: 6rem;
  }
}
</style>