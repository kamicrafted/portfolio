<script>
import { RouterLink, RouterView } from 'vue-router'
import TransitionExpand from './components/TransitionExpand.vue';

// reactive state
import { ref, onMounted } from 'vue'

import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import PrinterMarks from './components/PrinterMarks.vue'
import SocialLinks from './components/SocialLinks.vue'

export default {
  name: 'App',
  components: {
    TransitionExpand,
    RouterLink,
    RouterView,
    ref,
    onMounted,
    Nav,
    Footer,
    PrinterMarks,
    SocialLinks
  },
  data() {
    return {
      expanded: false,
    };
  },
}

</script>

<template>
  <Nav :expanded="expanded" />

  <RouterView v-slot="{ Component }">
    <transition name="route" mode="out-in" appear>
      <component :is="Component" />
    </transition>

    <!-- <transition-expand name="route" mode="out-in" appear>
      <component :is="Component" v-if="expanded" />
    </transition-expand> -->
  </RouterView>
  <Footer />

  <!-- <PrinterMarks /> -->
  <!-- <SocialLinks /> -->

  <div class="lighting"></div>
</template>

<style lang="scss">
@import 'styles/vars';

  * {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  html, body, #app {
    height: 100%;
    min-height: 100%;
  }

  body {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 

    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
  }
  
  main {
    max-width: $site-max-width;
    width: 100%;
    margin: 0 auto;
  }

  .lighting {
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(247,62,107);
    background: radial-gradient(at top right, rgba(247,62,107,1) 0%, rgba(247,62,107,0) 70%);
  }

  #app > .site-footer {
    display: none !important;
  }

  .template-home {
    body, #app {
      height: auto;
      min-height: 100%;
    }
  }
</style>