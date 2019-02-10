# [Vue Chart](https://cinwell.com/vue-trend/)

This demonstrates creating a line chart using the Vue Trend library.

## Usage

```javascript
new Vue({ el: "#app" });
```

```html
<div id="app">
    <trend
    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 5]"
    :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
    auto-draw
    smooth
    >
    </trend>
</div>
```

## Demo

[https://peterlamar.github.io/vue-examples/vuechart/](https://peterlamar.github.io/vue-examples/vuechart/)

[code sandbox](https://codesandbox.io/s/nywkpy4q0) 

### Locally

Open file index.html in a web browser

## Reference

[Vue Trend](https://cinwell.com/vue-trend/)