<template>
  <div id="app">
    <VCNavbar />
    <VCRouter />
    <VCUpdateAvailable v-model="updateAvailable" @refresh="refresh" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VCRouter from '@/components/VCRouter.vue';
import { registerMQ, unregisterMQ } from '@/utils/mediaQueries';
import VCUpdateAvailable from '@/components/VCUpdateAvailable.vue';
import VCNavbar from '@/components/VCNavbar.vue';

@Component({
  components: {
    VCNavbar,
    VCRouter,
    VCUpdateAvailable,
  },
})
export default class App extends Vue {
  public registration: ServiceWorkerRegistration | null = null;
  public updateAvailable = false;
  public refreshing = false;

  created(): void {
    document.addEventListener(
      'serviceWorkerUpdateEvent',
      (e) => {
        const reg = e as CustomEvent<ServiceWorkerRegistration>;
        this.registration = reg.detail;
        this.updateAvailable = true;
      },
      { once: true }
    );

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  }

  mounted(): void {
    registerMQ();
  }

  beforeDestroy(): void {
    unregisterMQ();
  }

  public refresh(): void {
    this.updateAvailable = false;
    if (this.registration) {
      this.registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display',
    'Timos Design', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, 'noto sans',
    'apple color emoji', 'segoe ui emoji', 'segoe ui symbol', 'noto color emoji',
    sans-serif;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
  margin: 0;
}

h1 {
  font-size: 2.5em;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.007em;
  line-height: 1.07;
  span {
    font-weight: 600;
    color: rgba(var(--vm-color-secondary), 1);
  }
}

[content] {
  padding: 0 5vw;
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
  padding-top: calc(70px + env(safe-area-inset-top));

  max-width: $max-width;
  margin: 0 auto;
}

[cursor] {
  cursor: pointer;
}

[center] {
  text-align: center;
}

[highlight] {
  color: rgba(var(--vm-primary), 1);
}

.hljs {
  background: rgba(var(--vm-paragraph), 1);
  color: rgba(var(--vm-color), 1);
  border-radius: $border-radius;
  padding: 20px;

  .hljs-keyword {
    color: #ff4757;
  }
  .hljs-title {
    color: #ffa657;
  }
  .function_ {
    color: #d2a8ff;
  }
  .hljs-string {
    color: #66bfff;
  }
  .hljs-attr {
    color: #66bfff;
  }
}

.grid-move,
.grid-enter-active {
  transition: all 0.5s ease-in-out !important;
}

.grid-leave-active {
  transition: all 0.2s ease-in-out !important;
  // position: absolute !important;
}

.grid-enter {
  opacity: 0;
  transform: translateY(30px);
}
.grid-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
