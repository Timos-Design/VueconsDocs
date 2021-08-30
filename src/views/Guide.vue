<template>
  <div class="view-guide">
    <h1>Guide. <span>How to use Vuecons.</span></h1>
    <br />
    <h2>Install</h2>
    <vm-divider />
    <br />
    <h3>NPM</h3>
    <p>
      Installing with npm is recommended and it works seamlessly with webpack.
    </p>
    <pre v-highlightjs="'npm install vuecons'"><code class="bash" /></pre>
    <h3>Yarn</h3>
    <pre v-highlightjs="'yarn add vuecons'"><code class="bash" /></pre>

    <br />
    <h2>Quick Start</h2>
    <vm-divider />
    <br />
    <h3>Use only specific icons</h3>
    <p>
      Using only a small selection of icons is recommended and reduces the final
      bundle size of your project
    </p>
    <pre
      v-highlightjs="
        `import Vue from 'vue'
import App from './App.vue'

import { VcAlignCenter, VcAnchor, VcFootball } from 'vuecons';

Vue.component('VcAlignCenter', VcAlignCenter);
Vue.component('VcAnchor', VcAnchor);
Vue.component('VcFootball', VcFootball);

new Vue({
  render: h => h(App)
}).$mount('#app')`
      "
    ><code class="ts" /></pre>
    <h3>Add every icon</h3>
    <pre
      v-highlightjs="
        `import Vue from 'vue'
import App from './App.vue'

import Vuecons from 'vuecons';

Vue.use(Vuecons)

new Vue({
  render: h => h(App)
}).$mount('#app')`
      "
    ><code class="ts" /></pre>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Guide extends Vue {}
</script>

<style lang="scss" scoped>
.view-guide {
  h3,
  h2 {
    margin: 0;
  }
}
</style>
