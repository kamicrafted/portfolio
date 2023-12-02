<script setup>
  import Gigs from '../components/Gigs.vue'
  import { useStringStore } from '../stores/strings'
  import PastClients from '../components/PastClients.vue'

  const introStrings = useStringStore()

  // console.log(stringStore.strings.strings.home)
</script>

<template>
  <div id="intro">
    <!-- <h1>{{ introStrings.strings.home.introduction }}</h1> -->
    <h1>Dave Yoon is a <span class="highlight">designer that illustrates and codes</span> by trade, <span class="highlight">creative leader</span> by function, and <span class="highlight">problem solver</span> by nature. He’s been crafting experiences on screens with pixels and bits since 2001.</h1>

    <Gigs />  

    <PastClients />
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/vars';

#intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // max-width: 40rem;
}

h1 {
  line-height: 1.4;
  margin-bottom: 24px;
  font-size: 2.05em;
  max-width: 39rem;
  color: rgba(255,255,255,1);

  .highlight {
    // background-color: rgba($color-contrast, .25);
    color: lighten($color-contrast, 20%);
    padding: 2px 4px;
  }
}

@media (max-width: 80rem) {
  h1 {
    font-size: 1.75rem;
  }
}

@media (max-width: 40rem) { // < 640, mobile landscape and down
  h1 {
    font-size: 1.35rem;
  }
}
</style>