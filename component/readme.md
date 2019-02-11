# [Vue Component](https://vuejs.org/v2/guide/components.html)

This demonstrates vue component basics. It also
calls an external api to show how this is accomplished
within a component. 

## Usage

```javascript
// Define a new component called button-counter
Vue.component('button-counter', {
    data: function () {
    return {
        count: 0
    }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('greeting', {
    template: '<h1>Welcome to components!</h1>'
});

// create a new Vue instance and mount it to our div element above with the id of app
var vm = new Vue({
    el: '#app'
});

new Vue({ el: '#components-demo' })

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

new Vue({
    el: '#blog-post-demo',
    data: {
    posts: []
    },
    created: function () {
    // Alias the component instance as `vm`, so that we
    // can access it inside the promise function
    var vm = this
    // Fetch our array of posts from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
        return response.json()
        })
        .then(function (data) {
        vm.posts = data
        })
    }
})
```

```html
<div id="app">
  <greeting></greeting>
</div>

<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>

<div id="blog-post-demo" class="demo">
  <blog-post
    v-for="post in posts"
    v-bind:key="post.id"
    v-bind:title="post.title"
  ></blog-post>
</div>
```

## Demo

[https://peterlamar.github.io/vue-examples/component/](https://peterlamar.github.io/vue-examples/component/)

[code sandbox](https://codesandbox.io/s/6zww24m5qz)

### Locally

Open file index.html in a web browser
