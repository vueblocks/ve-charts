<template>
  <pre v-hljs>
    <code class="json" v-html="sourcecode"></code>
  </pre>
</template>

<script>
import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

Vue.directive('hljs', {
  deep: true,
  bind: function(el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function(el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
})

export default {
  name: 'CodeBlock',
  props: {
    sourcecode: Object
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
  pre {
    margin: 0;
  }
  code {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: .5em;
  }
  .hljs {
    overflow-y: auto;
    height: 140px;
    max-height: 140px;
  }
</style>
