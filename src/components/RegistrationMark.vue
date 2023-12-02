<script setup>
import SiemensStar from './icons/SiemensStar.vue'
import Registration from './Icons/Registration.vue';
</script>

<template>
  <div class="marks">
    <SiemensStar />
    
    <div class="reg-bottom"><Registration /></div>
    <div class="reg-right"><Registration /></div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import '../styles/easing.scss';

.marks {
  width: 100%;
  height: 100%;
  opacity: .5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale .3s $easeInQuart;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 80%;
    background: rgba($color-highlight, .6);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 80%;
    background: rgba($color-highlight, .6);
  }

  .reg-bottom,
  .reg-right {
    position: absolute;
    opacity: .5;
  }

  .reg-right {
    position: absolute;
    right: -3rem;
  }

  .reg-bottom {
    position: absolute;
    bottom: -3rem;
  }
}
</style>