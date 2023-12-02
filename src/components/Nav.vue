<script setup>
defineProps({
  expanded: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <nav id="nav">
    <RouterLink to="/" @click="expanded = !expanded">Home</RouterLink>
    <RouterLink to="/work" @click="expanded = !expanded">Work</RouterLink>
    <!-- <RouterLink to="/play">Play</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink> -->
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';

#nav {
  position: sticky;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  padding: 1.5rem 0;

  a {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 .4rem;
  }
}
</style>