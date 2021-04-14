/*
Send visited coutnries
*/

// Create traveler info
const traveler = {
    name: "Alex",
    countries: [
      {
        name: "USA",
        year: 1996
      },
      {
        model: "India",
        color: 2018
      }
    ]
  };
  
  // Send this object as JSON data to the server
  fetch("http://localhost:3000/ex2", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err.message);
    });
  