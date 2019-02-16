<template>
<div v-bind:style="this.params.cellStyle">
  {{ params.value }}
</div>
</template>

<script>
export default {
  name: 'PriceCellRenderer',
    beforeMount () {
    }

}
</script>

<style>
</style>
