import hljs from 'highlight.js';
import Vue from 'vue';

Vue.directive('highlightjs', {
  bind: (el, binding) => {
    const targets = el.querySelectorAll('code');
    targets.forEach((target) => {
      if (binding.value) target.textContent = binding.value;
      hljs.highlightBlock(target);
    });
  },
  componentUpdated: (el, binding) => {
    const targets = el.querySelectorAll('code');
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value;
        hljs.highlightBlock(target);
      }
    });
  },
});
