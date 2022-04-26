const endpointDescription = {
  addresses: {
    endpoint: "/addresses",
    title: "Addresses endpoint",
    text: "This is an addresses endpoint",
    queryParameters: [{
      name: "total_rows",
      description: "Total number of rows that should be returned",
      example: "/addresses?total_rows=5",
      exampleResponse: [ 
        {
          "id": 1,
          "street_number": "3169",
          "street_name": "Buckingham Drive",
          "city": "Beach",
          "state": "VA",
          "zipcode": "44612",
          "country": "US"
        },
        {
          "id": 2,
          "street_number": "9853",
          "street_name": "2nd Avenue",
          "city": "Pryor",
          "state": "LA",
          "zipcode": "74459",
          "country": "US"
        },
        {
          "id": 3,
          "street_number": "383",
          "street_name": "2nd Street",
          "city": "Phenix",
          "state": "SC",
          "zipcode": "68881",
          "country": "US"
        }
      ],
      notes: "Specified number can be between 1 and 1000",
    }],
  },
  books: {
    endpoint: "/books",
    title: "Books endpoint",
    text: "This is a books endpoint",
    queryParameters: [{
      name: "total_rows",
      description: "Total number of rows that should be returned",
      example: "/books?total_rows=15",
      exampleOutcome: "add json here",
      notes: "Specified number can be between 1 and 1000",
    }, {
      name: "genre",
      description: "Return rows for a specific genre or a number of genres",
      example: "/books?genre='biography'",
      exampleOutcome: "add json here",
      notes: "To filter by muktiple genres, add 'genre' parameter for each genre",
    }]
},
  companies: {
    endpoint: "/companies",
    title: "Companies endpoint",
    text: "This is an companies endpoint",
    queryParameters: [{
      name: "total_rows",
      description: "Total number of rows that should be returned",
      example: "/addresses?total_rows=5",
      exampleOutcome: "add json here",
      notes: "Specified number can be between 1 and 1000",
    }],
  },
  movies: {
    endpoint: "/movies",
    title: "Movies endpoint",
    text: "This is an movies endpoint",
    queryParameters: [{
      name: "total_rows",
      description: "Total number of rows that should be returned",
      example: "/addresses?total_rows=5",
      exampleOutcome: "add json here",
      notes: "Specified number can be between 1 and 1000",
    }],
  },
  products: {
    endpoint: "/products",
    title: "Products endpoint",
    text: "This is an products endpoint",
    queryParameters: [{
      name: "total_rows",
      description: "Total number of rows that should be returned",
      example: "/addresses?total_rows=5",
      exampleOutcome: "add json here",
      notes: "Specified number can be between 1 and 1000",
    }],
  },
  users: {
    endpoint: "/users",
    title: "Users endpoint",
    text: "This is an companies endpoint",
    queryParameters: [{
      name: "total_rows",
      description: "Total number of rows that should be returned",
      example: "/addresses?total_rows=5",
      exampleOutcome: "add json here",
      notes: "Specified number can be between 1 and 1000",
    }],
  },
}

module.exports = {
  endpointDescription
}