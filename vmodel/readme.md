# Vue Model

This demonstrates creating v-model directive and its capabilities 

## Usage

```javascript
new Vue({
    el: '#vue-app',
    data: {
    name: 'a',
    age: ''
    }
})

new Vue({
    el: '#vue-app2',
    data: {
    message: 'm',
    checked: ''
    }
})

new Vue({
    el: '#example-3',
    data: {
    checkedNames: []
    }
})
```

```html
  <div id="vue-app">
    <h1>Keyboard Events</h1>
    <label>Name:</label>
    <input type="text" v-model="name">
    <span>{{ name }}</span><br>
    <label>Age:</label>
    <input type="text" v-model="age">
    <span>{{ age }}</span><br>
  </div>

  <div id="vue-app2">
    <input type="text" v-model="message">
    <span>{{ message }}</span><br>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
  </div>

  <div id='example-3'>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
  </div>
```

## Demo

[https://peterlamar.github.io/vue-examples/vmodel/](https://peterlamar.github.io/vue-examples/vmodel/)

[code sandbox](https://codesandbox.io/s/88lv4xk3l2)

### Locally

Open file index.html in a web browser
