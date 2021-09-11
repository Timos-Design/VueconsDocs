<template>
  <router-link
    :to="{ name: 'icon', params: { icon: icon } }"
    class="vc-icon-tile"
    :title="icon"
  >
    <component :is="componentName" hierarchical />
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VCIconTile extends Vue {
  @Prop() icon!: string;

  get componentName(): string {
    return 'vc-' + this.icon.replace(/[\s]/g, '-').toLowerCase();
  }
}
</script>

<style lang="scss" scoped>
.vc-icon-tile {
  display: grid;
  place-content: center;
  border-radius: 25%;

  height: 4rem;
  width: 4rem;

  color: inherit;
  text-decoration: none;

  font-size: 1.3rem;

  background: rgba(var(--vm-paragraph), 1);

  transition: 0.174s ease-in-out;
  &:hover {
    // font-size: 1.7rem;
    background: rgba(var(--vm-color), 1);
    color: rgba(var(--vm-background), 1);
    transform: scale(1.1);
  }
}
</style>
