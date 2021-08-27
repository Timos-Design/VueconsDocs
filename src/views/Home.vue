<template>
  <div class="view-home">
    <div class="hero">
      <h1>Vuecons. <span>SVG Icon Library for Vue.js</span></h1>
    </div>

    <div content>Welcome</div>

    <!-- {{ $store.getters.icons }} -->

    <!-- <input type="file" multiple @change="fileChanged" accept=".svg" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import backend from '@/utils/backend';

@Component
export default class Home extends Vue {
  public fileChanged(e: Event): void {
    const element = e.target as HTMLInputElement;
    this.uploadFiles(element.files);
    element.value = '';
  }

  public uploadFiles(files: FileList | null | undefined): void {
    if (files && files[0]) {
      Array.from(files)
        .filter((x) => !!x)
        .forEach((f) => {
          const formData = new FormData();
          formData.append('vuecon', f, f.name);
          backend
            .post('vuecons', formData)
            .then(({ data }) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error.message);
            });
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  .hero {
    background-size: cover;
    background-repeat: no-repeat;
    // background-position:  center;
    background-image: linear-gradient(
        to bottom,
        rgba(#000, 0.4),
        rgba(#000, 0.4)
      ),
      url('https://images.unsplash.com/photo-1626682560883-60eef9239200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80');

    h1 {
      padding: 50px 5vw;
      padding-top: calc(env(safe-area-inset-top) + 100px);
      max-width: $max-width;
      margin: 0 auto;
      color: #fff;
      text-align: center;
      span {
        color: darken(#fff, 20%);
      }
    }
  }
  padding: 0;
  max-width: unset;

  [content] {
    padding-top: 20px;
  }
}
</style>
