<template>
  <div class="sandbox--editor" :style="editorStyle">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CodeMirror from 'codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/vue/vue.js'

const DEFAULT_OPTIONS = {
  lineNumbers: true,
  mode: 'text/x-vue',
  theme: 'dracula',
  tabSize: 2
}

export default defineComponent({
  name: 'SandboxEditor',

  props: ['code', 'options', 'height'],

  computed: {
    editorStyle () {
      return {
        height: `${this.height}px`
      }
    }
  },

  watch: {
    code (val) {
      val !== this.editor.getValue() && this.editor.setValue(val)
    }
  },

  mounted () {
    this.currentOptions = Object.assign({}, DEFAULT_OPTIONS, this.options)
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea, this.currentOptions)
    this.editor.setValue(this.code)
    this.editor.on('change', this.handleChange)
  },

  beforeUnmount () {
    const element = this.editor.doc.cm.getWrapperElement()
    element && element.remove && element.remove()
  },

  methods: {
    handleChange () {
      this.$emit('change', this.editor.getValue())
    }
  }
})
</script>

<style lang="scss">
.sandbox--editor {
  .CodeMirror {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace !important;
    height: inherit;
  }
}
</style>

