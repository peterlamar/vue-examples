# [Vue Watchers](https://vuejs.org/v2/guide/computed.html#Watchers)

This example shows useage of 'Watcher' properties. Unfortunetly the functionality of Watchers are very similar to computed properties so it can be initially confusing. Computed properties can respond when many variables are modified, but watchers can be attached to only one variable.

## Usage

```javascript
var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
    // whenever question changes, this function will run
    question: function(newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
    }
    },
    created: function() {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
    getAnswer: function() {
        if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
        .then(function(response) {
            vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function(error) {
            vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
    }
})
```

```html
// Include
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>

<div id="watch-example">
<p>
    Ask a yes/no question:
    <input v-model="question">
</p>
<p>{{ answer }}</p>
</div>
```

## Demo

[https://peterlamar.github.io/vue-examples/watcher/](https://peterlamar.github.io/vue-examples/watcher/)

[code sandbox](https://codesandbox.io/s/o79nj388ry)

### Locally

Open file index.html in a web browser

## Reference

[Vue Computed](https://vuejs.org/v2/guide/computed.html)