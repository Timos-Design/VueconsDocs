<template>
  <vm-dialog class="vc-update-available" :value="innerValue" @close="close">
    <vm-flow flow="column">
      <img src="pwa/logo.svg" height="60" alt="" />
      <vm-title title="Update Available" />
      <br />
      <span center>
        Lets update <span highlight>Vuecons</span> to enjoy the latest features.
      </span>
    </vm-flow>

    <template slot="footer">
      <vm-dialog-button color="error" title="Cancel" @click="close" />
      <vm-dialog-button title="Update" @click="$emit('refresh')" />
    </template>
  </vm-dialog>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator';

@Component
export default class VCUpdateAvailable extends Vue {
  @Prop() value!: boolean;

  public innerValue = !!this.value;

  @Watch('value')
  valueChanged(): void {
    this.innerValue = !!this.value;
  }

  public close(): void {
    this.innerValue = false;
    this.$emit('input', false);
  }
}
</script>

<style lang="scss">
.vc-update-available .vm-dialog {
  max-width: 370px;
  .vm-dialog__content {
    overflow: visible !important;
  }
}
</style>

<style lang="scss" scoped>
.vc-update-available {
  img {
    margin-top: -50px;
    margin-bottom: 15px;
    filter: drop-shadow(4px 8px 20px rgba(var(--vm-primary), 0.4));
    border-radius: 25%;
    background: rgba(var(--vm-paragraph), 1);
    height: 60px;
  }
}
</style>
