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
  text-transform: capitalize;
  text-decoration: none;

  font-size: 1.3rem;

  box-shadow: inset 0 0 0 2px rgba(var(--vm-border), 1),
    2px 4px 8px rgba(#111, 0.08);

  transition: 0.174s ease-in-out;
  &:hover {
    background: rgba(var(--vm-background), 1);
    transform: scale(1.1);
  }
}
</style>
