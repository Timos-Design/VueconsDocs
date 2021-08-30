<template>
  <div class="view-library">
    <h1>Library. <span>Find the best icons for your next project</span></h1>
    <br />

    <div class="grid-wrapper">
      <vm-title
        v-if="icons.length === 0"
        subtitle="no results for"
        :title="`'${query}'`"
      />
      <transition-group name="grid" class="icon-grid">
        <VCIconTile v-for="i in icons" :key="i" :icon="i" />
      </transition-group>
    </div>
    <div class="spacer" />
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
  get query(): string {
    return this.$store.state.query;
  }

  get icons(): string[] {
    return (this.$store.getters.icons as string[]).filter((x) => {
      if (this.query.length === 0) return true;
      return x.toLowerCase().includes(this.query.toLowerCase());
    });
  }
}
</script>

<style lang="scss" scoped>
.view-library {
  padding-top: calc(110px + env(safe-area-inset-top));
  padding-bottom: 0px;

  .spacer {
    height: 5vw;
    max-height: 30px;
  }

  .grid-wrapper {
    padding: 20px;
    background: rgba(var(--vm-paragraph), 1);
    border-radius: $border-radius;

    .vm-title {
      height: 4rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .icon-grid {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
    }
  }
}
</style>
