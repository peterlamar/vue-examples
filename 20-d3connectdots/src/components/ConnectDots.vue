<template>
  <svg>
    <path stroke="#000"
          fill="none"
          stroke-width="5"
          :d="d" />
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
import * as d3 from 'd3'
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
  },
  // computed is cached and re-evaluated based on reactive dependencies
  computed: {
    lineGenerator() {
      return d3
        .line()
        // These vars can be any letter as long as they are consistent (q, m, etc)
        // Defined at https://github.com/d3/d3-shape#lines
        .x(q => q[0])
        .y(q => q[1])
    },
    d() {
      return this.lineGenerator(this.dataset)
    }
  }
}
/* Arrow Functions: 
parameters => expression
// is equivalent to:
function (parameters){
  return expression;
}
https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc
*/
</script>