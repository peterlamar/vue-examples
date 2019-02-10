# [Vue Computed](https://vuejs.org/v2/guide/computed.html)

This example shows useage of 'Computed' properties. By using the 'computed' property I have a place I can insert functions that are called when a variable is modified.

## Usage

```javascript
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        },
        now: function () {
            return Date.now()
        }
    },
    methods: {
        reverseMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})
```

```html
// Include 
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>Computed now: "{{ now }}"</p>
    <p>Reversed message: "{{ reverseMessage() }}"</p>
</div>
```

## Demo

[https://peterlamar.github.io/vue-examples/computed/](https://peterlamar.github.io/vue-examples/computed/)

[code sandbox](https://codesandbox.io/s/nywkpy4q0) 

### Locally

Open file index.html in a web browser

## Reference

[Vue Computed](https://vuejs.org/v2/guide/computed.html)