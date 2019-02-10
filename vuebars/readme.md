# [Vue Bars](https://github.com/DeviaVir/vue-bar#readme)

This demonstrates creating a bar chart using the Vue Trend library.

## Usage

```
npm i vuebars
```

```javascript
// main.js
import Vue from 'vue';
import VueBars from 'vuebars';

Vue(VueBars);
```

```html
// In component
<bars
  :data="[1, 2, 5, 9, 5, 10, 3, 5, 8, 12, 1, 8, 2, 9, 10, 2, 9, 4, 5, 6, 7, 3, 2, 3, 5]"
  :gradient="['#ffbe88', '#ff93df']"
  :barWidth="5"
  :growDuration="1"
></bars>
```

## Demo

[https://codesandbox.io/s/74prz8jp7j](https://codesandbox.io/s/74prz8jp7j)
[https://peterlamar.github.io/vue-examples/vuebars/](https://peterlamar.github.io/vue-examples/vuebars/)

## Reference

[Vue Bars](https://github.com/DeviaVir/vue-bar#readme)
