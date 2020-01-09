<template>
  <div class="ve-charts-empty-data">
    <span v-text="emptyText"></span>
  </div>
</template>

<script>
export default {
  name: 'EchartsEmptyData',
  props: {
    emptyText: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style>
.ve-charts-empty-data {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
