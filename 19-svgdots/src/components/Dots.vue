<template>
  <svg>
    <!-- v-for directive renders a list based on an array. 
          in this case, an array of pairs. -->
    <circle r="20"
            v-for="(item, index) in dataset"
            :cx="item[0]"
            :cy="item[1]"
            :key="index"
            fill="#000"
            @click="onClick(item)" />
  </svg>
</template>

<script>
import dataset from './dataset.json'
export default {
  data() {
    return {
      dataset
    }
  },
  methods: {
    onClick(item) {
      console.log('this is the item!', item)
    }
  }
}
</script>