<template>
  <div class="view-icon">
    <VCHero>
      <h1>
        <i :is="componentName" hierarchical />
        <span>{{ icon }}</span>
      </h1>
    </VCHero>

    <br /><br />
    <div content>
      <vm-grid width="100">
        <vm-flow flow="column">
          <i :is="componentName" huge hierarchical />
          <vm-title subtitle="default" />
        </vm-flow>
        <vm-flow flow="column">
          <i :is="componentName" slash huge hierarchical />
          <vm-title subtitle=".slash" />
        </vm-flow>
        <vm-flow flow="column">
          <i :is="componentName" circle huge hierarchical />
          <vm-title subtitle=".circle" />
        </vm-flow>
        <vm-flow flow="column">
          <i :is="componentName" square huge hierarchical />
          <vm-title subtitle=".square" />
        </vm-flow>
        <vm-flow flow="column">
          <i :is="componentName" rect huge hierarchical />
          <vm-title subtitle=".rect" />
        </vm-flow>
      </vm-grid>

      <br /><br />
      <div class="container">
        <vm-title title="Editor" :subtitle="icon" />
        <vm-button
          variant="border"
          background="color"
          color="background"
          :round="true"
        >
          <vc-play />
        </vm-button>
        <br />
        <div class="grid">
          <div class="checkboxes">
            <vm-checkbox
              background="color-secondary"
              color="background"
              title="circle"
              v-model="options.circle"
            />
            <vm-checkbox
              background="color-secondary"
              color="background"
              title="square"
              v-model="options.square"
            />
            <vm-checkbox
              background="color-secondary"
              color="background"
              title="rect"
              v-model="options.rect"
            />
            <vm-checkbox
              background="color-secondary"
              color="background"
              title="slash"
              v-model="options.slash"
            />
            <vm-checkbox
              background="color-secondary"
              color="background"
              title="fill"
              v-model="options.fill"
            />
          </div>
          <div class="preview">
            <i
              :is="componentName"
              :circle="options.circle"
              :square="options.square"
              :rect="options.rect"
              :slash="options.slash"
              :fill="options.fill"
              hierarchical
            />
          </div>
        </div>
      </div>
    </div>
    <div class="spacer" />
  </div>
</template>

<script lang="ts">
import VCHero from '@/components/VCHero.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VCHero,
  },
})
export default class Icon extends Vue {
  public options = {
    circle: false,
    square: false,
    rect: false,
    slash: false,
    fill: false,
  };

  mounted(): void {
    if (!this.$store.getters.icons.includes(this.icon)) {
      this.$router.push({ name: 'library' });
      return;
    }
  }

  get icon(): string {
    return this.$route.params.icon;
  }

  get componentName(): string {
    return 'vc-' + this.icon.replace(/[\s]/g, '-').toLowerCase();
  }
}
</script>

<style lang="scss" scoped>
.view-icon {
  padding: 0;
  max-width: unset;

  .vc-hero {
    h1 {
      display: flex;
      align-items: center;
      max-width: $max-width;
      margin: 0 auto;
      span {
        margin-left: 10px;
      }
    }
  }

  [content] {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .spacer {
    height: 5vw;
    max-height: 30px;
  }

  [huge] {
    font-size: 3em;
    margin-bottom: 10px;
  }

  .container {
    background: rgba(var(--vm-paragraph), 1);
    padding: 20px;
    border-radius: $border-radius;
    position: relative;

    .vm-button {
      position: absolute;
      top: 5px;
      right: 5px;
    }

    .grid {
      display: grid;
      grid-template-columns: auto 1fr;
      .checkboxes {
        display: flex;
        flex-direction: column;
      }
      .preview {
        display: grid;
        place-content: center;
        font-size: 5em;
      }
    }
  }
}
</style>
