<script setup>
  document.body.classList.remove(...document.body.classList);
  document.body.classList.add('template-work')

  import ProjectCard from '../components/ProjectCard.vue'
  import Footer from '../components/Footer.vue'

</script>

<template>
  <main id="work">
    <div class="content">
      <div class="projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <Footer />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../styles/vars';
@import '../styles/easing';

.template-work {
  overflow-y: auto;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  height: 100%;
  margin-top: 5em;
  overflow-y: visible;
}

.projects {
  margin: 0 6rem;
  max-width: $site-max-width;
  padding-bottom: 4rem;
}

@media (min-width: 1024px) {
  #work {
    min-height: 100vh;
    width: 100%;
    // overflow: hidden;

    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fill, calc(100%/3 - 2rem));
      grid-gap: 2rem;
    }
  }
}

@media (max-width: 1023px) {
  .projects {
    margin: 0 2rem;
  }
}
</style>
