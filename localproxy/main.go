package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	var name string

	fmt.Print("Received request ", r)

	found := r.URL.Query().Get("name")
	if found != "" {
		name = found
	} else {
		name = "world"
	}

	fmt.Fprintf(w, "Hello, %s!", name)
}

func main() {
	fmt.Print("Go to http://localhost:9000/report/usage?name=Alice\n")
	fmt.Print("Or\n")
	fmt.Print("curl -H \"Content-Type: application/xml\" -X GET http://localhost:9000/report/usage?name=Alice \n")

	http.HandleFunc("/report/usage", handler)
	http.ListenAndServe(":9000", nil)
}