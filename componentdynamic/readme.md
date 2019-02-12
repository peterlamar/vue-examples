# Vue Dynamic Component

This demonstrates dynamic component functionality. It is intentionally simple to show how components can be dynamically created and manipulated. 

## Usage

```javascript

    Vue.component('tab-home', {
    	template: '<div>Home component</div>'
    })
    Vue.component('tab-posts', {
    	template: '<div>Posts component</div>'
    })
    Vue.component('tab-archive', {
    	template: '<div>Archive component</div>'
    })

    new Vue({
      el: '#dynamic-component-demo',
      data: {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
      },
      computed: {
        currentTabComponent: function () {
          return 'tab-' + this.currentTab.toLowerCase()
        }
      }
    })
```

```html
// Includes
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-trend-component@0.1.0/dist/vue-trend-component.common.min.js"></script>

<div id="dynamic-component-demo" class="demo">
  <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>

  <component
    v-bind:is="currentTabComponent"
    class="tab"
  ></component>
</div>
```

## Demo

[https://peterlamar.github.io/vue-examples/componentdynamic/](https://peterlamar.github.io/vue-examples/componentdynamic/)

[code sandbox](https://codesandbox.io/s/5k01x3kqrk) 

### Locally

Open file index.html in a web browser
