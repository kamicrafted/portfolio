<script setup>
</script>

<template>
  <dt class="heading">Past Clients & Projects</dt>
  <dl class="past-logos">
    <dt><img src="/src/assets/img/clients/logo-fubo.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-tacobell.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-dcu.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-wb.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-shudder.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-dramafever.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-swarovski.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-spotify.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-pfizer.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-sanofi.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-merck.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-pg.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-absolut.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-mars.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-covergirl.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-defjam.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-rockstar.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-sonyclassics.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-mtv.png" alt=""></dt>
    <dt><img src="/src/assets/img/clients/logo-umrg.png" alt=""></dt>
  </dl>
</template>

<style lang="scss" scoped>
@import '../styles/vars';
@import '../styles/easing';

.past-logos {
  display: grid;
  max-width: 40rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: .5rem;

  dt {
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #333;
    border-radius: .5rem;
    padding: .5rem 1rem;
    background-color: rgba(255,255,255,.025);
    transition: all .25s $easeInOutQuart;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0) scale(1, 1);
    -webkit-transform: translateZ(0) scale(1, 1);

    &:hover {
      background-color: $color-highlight;
      transform: scale(1.1);
    }

    img {
      width: 120%;
    }
  }
}

.heading {
  border-left: 3px solid rgba($color-contrast, .2);
  padding-left: 8px;
  margin-bottom: 16px;
  color: rgba(white, .8);
  color: white;
  font-weight: bold;
}

@media (max-width: 80rem) {
  .past-logos {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
}



@media (max-width: 40rem) {
  .past-logos {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
}

@media (max-width: 25rem) {
  .past-logos {
    grid-template-columns: 1fr 1fr 1fr;
    gap: .25rem;
  }
}
</style>