# Local dev server proxy example

Hellowworld vue with proxy enabled with vue.config.js. /report/* requests are
routed to localhost:9000. This is useful when you have an external backend 
(python/golang/etc) as the api server and don't want to receive cross site
scripting errors. The external backend would be running at port 9000 and is
proxied by vue npm server for development. 

## Usage 

This code was added to vue.config.js to redirect requests 

```
module.exports = {
  devServer: {
    proxy: {
      '/report/*': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
