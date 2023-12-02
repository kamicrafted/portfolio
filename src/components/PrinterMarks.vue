<script setup>
import RegistrationMark from './RegistrationMark.vue'
// const props = defineProps(['graphic'])
// console.log(props.graphic)

const colorSwatches = [
  '#00ADEE',
  '#EC008D',
  '#FFF100',
  '#303192',
  '#EE1C25',
  '#00A651',
  '#363638',
  '#231F20'
]
</script>

<template>
  <div id="canvas">
    <div class="corner-ul"><RegistrationMark /></div>
    <div class="corner-ur"><RegistrationMark /></div>
    <div class="corner-bl"><RegistrationMark /></div>
    <div class="corner-br"><RegistrationMark /></div>

    <dl class="bars color-bar">
      <dt v-for="(swatch, index) in colorSwatches" :key="swatch.index" :style="{'background-color': colorSwatches[index]}"></dt>
    </dl>

    <SocialLinks />
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/easing.scss';

#canvas {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  
  .corner-ul,
  .corner-ur,
  .corner-bl,
  .corner-br {
    position: sticky;
    width: 100px;
    height: 100px;
    transition: all .15s $easeInOutQuad;
  }
  .corner-ul {
    top: 0;
    left: 0;
  }

  .corner-ur {
    top: 0;
    left: calc(100% - 100px);

    .marks {
      transform: rotate(90deg);
    }
  }

  .corner-bl {
    top: calc(100% - 100px);
    left: 0;

    .marks {
      transform: rotate(270deg);
    }
  }

  .corner-br {
    top: calc(100% - 100px);
    left: calc(100% - 100px);

    .marks {
      transform: rotate(180deg);
    }
  }

  .color-bar {
    position: sticky;
    padding-left: 2.4rem;
    top: 50%;
    border-radius: .2rem;
    transform: translateY(-50%);
    
    > dt {
      width: 20px;
      height: 20px;

      &:first-child {
        border-radius: .2rem .2rem 0 0;
      }

      &:last-child {
        border-radius: 0 0 .2rem .2rem;
      }
    }
  }
}

@media (max-width: 1023px) {
  #canvas {
    .corner-ul,
    .corner-ur,
    .corner-bl,
    .corner-br {
      transform: scale(.5);
    }

    .corner-ul {
      top: -25px;
      left: -25px;
    }

    .corner-ur {
      top: -25px;
      left: auto;
      right: -25px;
    }

    .corner-bl {
      top: auto;
      bottom: -25px;
      left: -25px;
    }

    .corner-br {
      top: auto;
      bottom: -25px;
      left: auto;
      right: -25px;
    }
  }

  .color-bar {
    padding-left: 1.5rem !important;

    > dt {
      width: 10px !important;
      height: 10px;
    }
  }
}

@media (max-width: 40rem) {
  .marks {
    display: none;
  }
}
</style>