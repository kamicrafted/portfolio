<script setup>
import { useStringStore } from '../stores/strings'

const gigStrings = useStringStore()
</script>

<template>
  <div class="gigs">
    <dl class="gig">
      <dt class="heading">Currently:</dt>
      <dt>{{ gigStrings.strings.home.current }}</dt>
    </dl>

    <dl class="gig gig--previous">
      <dt class="heading">Previously:</dt>
      <dt>{{ gigStrings.strings.home.previous }}</dt>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/vars';

.gig {
  border-left: 3px solid $color-contrast;
  padding-left: 8px;
  margin-bottom: 2rem;
  color: rgba(white, .8);
  .heading {
    color: white;
    font-weight: bold;
  }

  &--previous {
    border-left: 3px solid rgba($color-contrast, .4);
  }
}

@media (max-width: 80rem) {
  .heading {
    text-transform: uppercase;
    font-size: .75rem;
  }
}
</style>