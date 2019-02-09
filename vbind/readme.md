# vbind

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

Open [index.html](index.html) with your Internet browser or go to

[code sanbox](https://codesandbox.io/s/vvm7z2224y) to view functionality.

# Instructions

Open file index.html in a web browser


## Reference

https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding/
