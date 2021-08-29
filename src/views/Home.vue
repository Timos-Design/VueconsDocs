<template>
  <div class="view-home">
    <VCHero>
      <h1>Vuecons. <span>SVG Icon Library for Vue.js</span></h1>
      <form @submit.stop.prevent="$router.push({ name: 'library' })">
        <vm-input
          frosted
          size="medium"
          placeholder="Search for an icon..."
          v-model="$store.state.query"
        />
      </form>
    </VCHero>
    <div class="hero"></div>

    <div content>Welcome</div>

    <!-- {{ $store.getters.icons }} -->

    <!-- <input type="file" multiple @change="fileChanged" accept=".svg" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import backend from '@/utils/backend';
import VCHero from '@/components/VCHero.vue';

@Component({
  components: {
    VCHero,
  },
})
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
  padding: 0;
  max-width: unset;

  .vc-hero {
    background-size: cover;
    background-repeat: no-repeat;
    // background-position:  center;
    padding: 30px 0;
    background-image: linear-gradient(
        to bottom,
        rgba(#000, 0.5),
        rgba(#000, 0.5)
      ),
      url('https://images.unsplash.com/photo-1626682560883-60eef9239200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80');

    color: #fff;
    text-align: center;
    span {
      color: darken(#fff, 20%);
    }
  }

  form {
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    max-width: 400px;
    font-weight: 500;
    .vm-input {
      color: #fff;
      box-shadow: inset 0 0 5px 4px #111;
      border-radius: 7.5px;
    }
  }

  [content] {
    padding-top: 20px;
  }
}
</style>
