<template>
  <div class="sandbox">
    <sandbox-editor :code="code" :height="400" @change="renderComponent" />
    <sandbox-preview :dynamic-component="dynamicComponent" :options="previewOptions" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SandboxEditor from './SandboxEditor.vue'
import SandboxPreview from './SandboxPreview.vue'

import { DEMO_1, OPTIONS_1 } from './examples'

export default defineComponent({
  name: 'Sandbox',
  props: {
    dynamicComponent: String
  },
  components: {
    SandboxEditor,
    SandboxPreview
  },
  setup (props) {
    return {
      code: DEMO_1,
      previewOptions: OPTIONS_1,
      renderComponent: val => console.log(val)
    }
  }
})
</script>

<style lang="scss">
.sandbox {
  box-sizing: content-box;
  height: 400px;
  display: flex;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  margin: 20px 0;
  font-size: 14px;
  &--editor,
  &--preview {
    width: 50%;
  }
  &--editor {
    border-right: 1px dashed #ebebeb;
  }
  &:hover {
    box-shadow: 0 0 10px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 60%);
  }
}
</style>
