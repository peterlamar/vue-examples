// Declarative Rendering using Vue template syntax
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

// Bind Elements with v-bind Directive keeps html title
// attribute up to date with message property
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

// v-if directive toggle demonstrating if condition
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})

// v-for directive demonstrating loops
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

// v-on directive demonstrating callback to method
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


// v-model directive demonstrates two way binding
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// Component example. These are somewhat like subclasses
// that can be defined and allow for decoupled functionality
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
