<template>
  <div class="view-library">
    <h1>Library. <span>Find the best icons for your next project</span></h1>
    <br />

    <transition-group name="grid" class="icon-grid">
      <VCIconTile v-for="i in icons" :key="i" :icon="i" />
    </transition-group>
  </div>
</template>

<script lang="ts">
import VCIconTile from '@/components/VCIconTile.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VCIconTile,
  },
})
export default class Library extends Vue {
  get icons(): string[] {
    const query: string = this.$store.state.query;
    return (this.$store.getters.icons as string[]).filter((x) => {
      if (query.length === 0) return true;
      return x.toLowerCase().includes(query.toLowerCase());
    });
  }
}
</script>

<style lang="scss" scoped>
.view-library {
  padding-top: calc(110px + env(safe-area-inset-top));

  .icon-grid {
    padding: 20px;
    background: rgba(var(--vm-paragraph), 1);
    min-height: 4rem;
    border-radius: $border-radius;

    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  }
}
</style>
