package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Countries struct {
	Name      string
	Continent string
}

func handler(w http.ResponseWriter, r *http.Request) {
	countries := []Countries{
		{Name: "USA", Continent: "North America"},
		{Name: "Canada", Continent: "North America"},
		{Name: "England", Continent: "Europe"},
		{Name: "France", Continent: "Europe"},
	}

	fmt.Print("Received request ", r)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(countries)
}

func main() {
	fmt.Print("Go to http://localhost:9000/getreport \n")
	fmt.Print("Or\n")
	fmt.Print("curl -H \"Content-Type: application/json\" -X GET http://localhost:9000/getreport \n")

	http.HandleFunc("/getreport", handler)
	http.ListenAndServe(":9000", nil)
}
