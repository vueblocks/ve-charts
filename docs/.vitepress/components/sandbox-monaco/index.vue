<template>
  <section class="sandbox">
    <div ref="monaco" class="sandbox-monaco" :style="monacoStyle"></div>
  </section>
</template>

<script>
import * as monaco from 'monaco-editor'
import './worker'

import loadTheme from './theme.js'
// import { mapState } from 'vuex'

export default {
  name: 'SandBoxMonaco',
  props: {
    language: {
      require: true,
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    isFolded: {
      type: Boolean,
      default: false
    },
    editorHook: {
      type: Function,
      default: null
    },
    inputHook: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      showPartial: true,
      monacoEditor: null,
      editorLineCount: 1,
      basicConfig: {
        value: '// First line\nfunction hello() {\n\talert("Hello world!");\n}\n// Last line',
        language: 'javascript',
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: {
          enabled: false
        },
        smoothScrolling: true
      }
    }
  },
  computed: {
    // ...mapState(['config']),
    monacoStyle() {
      return {
        height: this.isFolded ? 0 : `${this.editorLineCount * 18}px`
      }
    }
  },
  // watch: {
  //   value(val) {
  //     if (val) this.monacoEditor.setValue(val)
  //   }
  // },
  mounted () {
    this.initMonaco()
  },
  unmounted () {
    if (this.monacoEditor) {
      this.monacoEditor.getModel().dispose()
      this.monacoEditor.dispose()
    }
  },
  methods: {
    initMonaco() {
      // let model
      if (this.editorHook) {
        model = this.editorHook(monaco, this.value, this.language)
      }

      // 加载全部主题
      loadTheme(monaco)

      this.monacoEditor = monaco.editor.create(
        this.$refs.monaco,
        this.basicConfig
      )

      this.monacoEditor.onDidChangeModelContent(() => {
        this.editorLineCount = this.monacoEditor.getModel().getLineCount()
      })

      // if (model) {
      //   this.monacoEditor.setModel(model)
      // } else {
      //   this.monacoEditor.setValue(this.value)
      // }

      // this.bindContentChangeListener()

      this.$nextTick(_ => {
        this.editorLineCount = this.monacoEditor.getModel().getLineCount()
      })
    },
    bindContentChangeListener() {
      if (!this.monacoEditor) throw new Error('editor is not mounted')
      this.monacoEditor.onDidChangeModelContent(() => {
        const value = this.monacoEditor.getValue()
        if (this.inputHook) {
          const res = this.inputHook(this.monacoEditor, value)
          if (res !== false) this.$emit('input', value)
        } else {
          this.$emit('input', value)
        }
      })
    }
  }
}
</script>

<style lang="scss">
// @import '@/css/index.scss';

.sandbox {
  &-monaco {
    height: 100%;
    overflow: hidden;
    transition: 300ms all ease-out;
  }
}
</style>
