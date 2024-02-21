<script setup>
defineProps({
  msg: {
    type: String
  }
})
</script>

<template>
  <article class="project-card">
    {{ msg }}
  </article>
</template>

<style scoped lang="scss">
.project-card {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 20rem;
  width: 100%;
  background: red;
  border-radius: .5rem;
  font-weight: 700;
  font-size: 2rem;
}
</style>