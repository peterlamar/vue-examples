# Local dev server proxy example

Hellowworld vue with proxy enabled with vue.config.js. /report/* requests are
routed to localhost:9000. This is useful when you have an external backend 
(python/golang/etc) as the api server and don't want to receive cross site
scripting errors. The external backend would be running at port 9000 and is
proxied by vue npm server for development. 

## server

```
go run main.go
```

## client

Change into client dir

```
cd client 
```

### Usage 

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

When the app starts, it will send a request to the server. The 
server will then print the request locally. This is indicating a 
successful proxied request occurred and no cross site scripting
error was spawned by the browser.

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

### Reference

See [Configuration Reference](https://cli.vuejs.org/config/).
