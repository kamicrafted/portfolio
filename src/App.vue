<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">404</RouterLink>
      <RouterLink to="/work">Work</RouterLink>
    </nav>
  </header>

  <!-- <HelloWorld msg="You did it!" /> -->

  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>

<style scoped lang="scss">






header {
  margin: 0 auto;
  line-height: 1.5;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    // padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    // margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
