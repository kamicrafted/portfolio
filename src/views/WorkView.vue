<script setup>
import Project from '@/components/Project.vue';
</script>

<template>
  <main class="projects">
    <section class="project-wrapper project-wrapper--single">
      <Project msg="Fubo" class="project" />
    </section>

    <section class="project-wrapper project-wrapper--double">
      <Project msg="WB Digital Labs" class="project" />
      <Project msg="DramaFever" class="project" />
    </section>
  </main>
</template>

<style scoped lang="scss">
.projects {

  .project {
    margin-bottom: 1rem;
  }
}

.project-wrapper {
  &--double {
    display: flex;
    gap: 1rem;
  }
}
</style>