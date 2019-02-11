# [Contour](http://forio.com/contour/get_contour.html) Chart

This is a quick and easy chart, demonstrating how to do so using script tags
within the html file. References (include links) are utilized to load
the libraries responsible for visualizing the chart.

## Usage

```javascript
new Contour({
    el: '.myFirstChart'
})
.cartesian()
.line([1, 2, 3, 4, 5, 4, 3, 2, 1])
.render();
```

```html
// Include files
<link rel="stylesheet" href="http://forio.com/tools/contour/contour.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
<script src="http://forio.com/tools/contour/contour.min.js"></script>

// Chart placeholder
<div class="myFirstChart" style="width:80%; height:300px;"></div>
```

## Demo

[code pen](https://codepen.io/peterlamar/pen/vbdoJG) to view functionality.

### Locally

Open file index.html in a web browser

## Reference

[Contour](http://forio.com/contour/get_contour.html)
