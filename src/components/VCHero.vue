<template>
  <div class="vc-hero">
    <div class="vc-hero--content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class VCHero extends Vue {}
</script>

<style lang="scss" scoped>
.vc-hero {
  background: rgba(var(--vm-paragraph), 1);
  margin-top: calc(50px + env(safe-area-inset-top));
  &--content {
    position: relative;
    width: 90vw;
    padding: 20px 5vw;
    max-width: $max-width;
    margin: 0 auto;
  }
}
</style>
