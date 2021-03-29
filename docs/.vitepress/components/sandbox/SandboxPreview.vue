<template>
  <component
    class="sandbox--preview"
    :is="dynamicComponent"
    v-bind="options"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SandboxPreview',

  props: {
    dynamicComponent: {
      type: String,
      default: 'BarChart'
    },
    options: {
      type: Object,
      default: {}
    }
  }
})
</script>
