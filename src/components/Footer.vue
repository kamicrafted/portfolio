<script setup>
import VueIcon from './icons/Vue.vue';

const contrastSwatches = [
  'rgba(255,255,255,1)',
  'rgba(255,255,255,.9)',
  'rgba(255,255,255,.8)',
  'rgba(255,255,255,.7)',
  'rgba(255,255,255,.6)',
  'rgba(255,255,255,.5)',
  'rgba(255,255,255,.4)',
  'rgba(255,255,255,.3)',
  'rgba(255,255,255,.2)',
  'rgba(255,255,255,.1)',
]
</script>

<template>
  <footer class="site-footer">
    <p>© Kamicrafted.com, All rights reserved.<br /> Crafted with 🩷, powered by <VueIcon class="icon-vue" />.</p>

    <dl class="bars contrast-bar">
      <dt v-for="(swatch, index) in contrastSwatches" :key="swatch.index" :style="{'background-color': contrastSwatches[index]}"></dt>
    </dl>
  </footer>
</template>


<style lang="scss" scoped>
footer {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  br {
    display: none;
  }

  .contrast-bar {
    display: flex;
    border: 1px solid rgba(0,0,0,.25);
    border-radius: .2rem;
    margin-top: 1rem;

    > dt {
      width: 20px;
      height: 20px;

      &:first-child {
        border-radius: .2rem 0 0 .2rem;
      }

      &:last-child {
        border-radius: 0 .2rem .2rem 0;
      }
    }
  }

  p {
    color: rgba(255,255,255,.8);
    font-size: .8rem;
  }

  .icon-vue {
    position: relative;
    top: 4px;
  }
}


// position: fixed;
// left: 50%;
// bottom: 2rem;
// transform: translateX(-50%);

@media (max-width: 80rem) {
  footer {
    margin-top: 2rem;
  }
}

@media (max-width: 40rem) {
  footer {
    margin-top: 2rem;
    p {
      font-size: .6rem;
      text-align: center;
    }

    br {
      display: inline-block;
    }

    .icon-vue {
      width: 14px;
    }
  }
}
</style>