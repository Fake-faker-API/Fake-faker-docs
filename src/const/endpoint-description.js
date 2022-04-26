const endpointDescription = {
  addresses: {
    endpoint: "/addresses",
    title: "Addresses endpoint",
    text: "This is an addresses endpoint",
    queryParameters: [{
      name: "total_rows",
      description: "Total number of rows that should be returned",
      example: "/addresses?total_rows=5",
      exampleOutcome: "add json here",
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