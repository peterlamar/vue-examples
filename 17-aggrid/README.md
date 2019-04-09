# Local aggrid

This builds on the
[LocalProxy](https://github.com/peterlamar/vue-workshop/tree/master/localproxy)
project by making a rest call to a local server that returns values that are
inserted into a grid. This is a good getting started example for a end-to-end
web application.

## Server

go run main.go

## Client

Change into client dir

```
cd client
```

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

### Usage 

This is the code that makes a simple REST call from the client.

```
submit: function () {
axios
    .post(this.endpoint, this.request)
    .then(response => {
    this.rowData = response.data
    console.log(response.data)
    })
    .catch(function (error) {
    console.log(error)
    })
}
```

When the app starts, it will send a request to the server. The
client will then display the data locally within a grid.

### Reference

See [AG-GRID Vue example](https://github.com/ag-grid/ag-grid-vue-example).
