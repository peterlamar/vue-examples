# vbind

vbind allows an html property to mirror a javascript variable. You can think of it as setting an html variable to a javascript variable by reference so that changes to the javascript variable appear in the html variable or property.

The vbind concept was confusing to me at first so I wanted another example. I was able to find this after some searching and it helped explain the concept. In this example the html is

```
<img :src="image" v-bind:alt="altText" />
```

And the Vue Javascript code changes this to

```
<img :src="./assets/vmSocks-blue.jpg" v-bind:alt="altText" />
```

by using v-binding to bing the Vue component to the html div tag and then assigning a new value to the image attribute.

## Demo

[code sanbox](https://codesandbox.io/s/vvm7z2224y) 

[https://peterlamar.github.io/vue-examples/vbind/](https://peterlamar.github.io/vue-examples/vbind/)

## Demo locally

Open file index.html in a web browser

## Reference

https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/
