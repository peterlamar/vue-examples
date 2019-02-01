<style lang="css">

@import '~ag-grid-community/dist/styles/ag-grid.css';
@import '~ag-grid-community/dist/styles/ag-theme-balham.css';

</style>

<template>
<div class="home">
  <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
  <specs />

  <div class="data-query">

  </div>

  <ag-grid-vue style="width: 100%; height: 1000px;"
    class="ag-theme-balham"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :components="components"
    rowSelection="multiple"
    @first-data-rendered="onFirstDataRendered">
  </ag-grid-vue>
</div>
</template>

<script>
// @ is an alias to /src
import { AgGridVue } from 'ag-grid-vue'
import axios from 'axios'
import 'ag-grid-enterprise'

export default {
  name: 'CountryGrid',
  data () {
    return {
      columnDefs: null,
      rowData: null,
      components: {},
      request: {},
      endpoint: '/reports/onereport'
    }
  },
  components: {
    AgGridVue
  },
  beforeMount () {
    this.columnDefs = [{
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      resizable: true
    }, {
      headerName: 'Continent',
      field: 'continent',
      sortable: true,
      filter: true,
      resizable: true
    }]

    this.submit()
  },
  methods: {
    updateData (rowData) {
      this.rowData = rowData
    },
    onFirstDataRendered (params) {
      params.api.sizeColumnsToFit()
    },
    submit: function () {
    axios
      .post(this.endpoint, this.request)
      .then(response => {
        this.rowData = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    setRequest: function (start, end) {
    },
    addEnv: function () {
      this.envTypes.push({value: ''})
    },
    getEnvTypes: function () {
      var rtn = []
      for (var i in this.envTypes) {
        rtn.push(this.envTypes[i].value)
      }
      return rtn
    }
  }
}
</script>
