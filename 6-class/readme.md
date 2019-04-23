# [Vue Class](https://vuejs.org/v2/guide/class-and-style.html)

This demonstrates using v-bind to html classes. This is a demo intended
to be understood from the console.

## Usage

```javascript
var vm = new Vue({
    el: '#example',
    data: {
    isActive: true,
    hasError: false
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
    classObject: {
        active: true,
        'text-danger': false
    }
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
    isActive: true,
    error: null
    },
    computed: {
    classObject: function () {
        return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
        }
    }
    }
})
```

```html
// Include
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>


<div id="example" class="static" v-bind:class="{ active: isActive,
'text-danger': hasError }"></div>
<div id="app2" v-bind:class="classObject"></div>
<div id="app3" v-bind:class="classObject"></div>
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

## Demo

[https://peterlamar.github.io/vue-examples/class/](https://peterlamar.github.io/vue-examples/class/)

[code sandbox](https://codesandbox.io/s/l2qjk65y17)

## Demo locally

Open file index.html in a web browser
