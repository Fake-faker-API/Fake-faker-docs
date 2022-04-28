const endpointDescription = {
  addresses: {
    endpoint: '/addresses',
    title: 'Addresses',
    method: 'GET',
    endpointDescription: 'Retrieves an address object, containing fake but realistic US address. Currently response returns an array of 10 objects by default.',
    objectName: 'Address',
    object: [{
      name: 'id',
      type: 'integer',
      description: 'Unique identifier.'
    },
    {
      name: 'street_number',
      type: 'string'
    },
    {
      name: 'street_name',
      type: 'string'
    },
    {
      name: 'city',
      type: 'string'
    },
    {
      name: 'state',
      type: 'string',
      description: 'Currently all objects have US states only'
    },
    {
      name: 'zipcode',
      type: 'string',
      description: 'Currently all objects have US zipcodes only'
    },
    {
      name: 'country',
      type: 'string',
      description: 'Currently all objects have US as their country'
    }],
    queryParameters: [{
      name: 'total_rows',
      description: 'Total number of objects to be returned. The number should be between 1 and 1000. If invalid number is provided, the result will return 10 objects.',
      exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/addresses?total_rows=3',
      exampleResponse: [{
        id: 1,
        street_number: '3169',
        street_name: 'Buckingham Drive',
        city: 'Beach',
        state: 'VA',
        zipcode: '44612',
        country: 'US'
      },
      {
        id: 2,
        street_number: '9853',
        street_name: '2nd Avenue',
        city: 'Pryor',
        state: 'LA',
        zipcode: '74459',
        country: 'US'
      },
      {
        id: 3,
        street_number: '383',
        street_name: '2nd Street',
        city: 'Phenix',
        state: 'SC',
        zipcode: '68881',
        country: 'US'
      }
      ],
      notes: 'Specified number can be between 1 and 1000'
    },
    {
      name: 'state',
      description: 'Filter objects by state',
      exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/addresses?total_rows=3&state=IL',
      exampleResponse: [
        {
          id: 94,
          street_number: '6125',
          street_name: 'Ridge Road',
          city: 'Glendale',
          state: 'IL',
          zipcode: '13754',
          country: 'US'
        },
        {
          id: 141,
          street_number: '2260',
          street_name: 'Bridge Street',
          city: 'Lewiston',
          state: 'IL',
          zipcode: '97523',
          country: 'US'
        },
        {
          id: 167,
          street_number: '554',
          street_name: 'Hillcrest Drive',
          city: 'Silverton',
          state: 'IL',
          zipcode: '72704',
          country: 'US'
        }
      ],
      notes: 'Any US state is a valid option'
    }]
  },
  books: {
    endpoint: '/books',
    title: 'Books',
    method: 'GET',
    endpointDescription: 'Retrieves a book object, containing information about a fake book. Currently response returns an array of 10 objects by default.',
    objectName: 'Book',
    object: [{
      name: 'id',
      type: 'integer',
      description: 'Unique identifier.'
    },
    {
      name: 'title',
      type: 'string',
      description: 'Randomly generated (fake) name.'
    },
    {
      name: 'author',
      type: 'string',
      description: 'Randomly generated (fake) author.'
    },
    {
      name: 'genre',
      type: 'string',
      description: "Filter by genre. List of possible options: Action/adventure, Art/architecture, Alternate history, Autobiography, Anthology, Biography, \
      Chick lit, Business/economics, Children's, Crafts/hobbies, Classic, Cookbook, Comic book, Diary, \
      Coming-of-age, Dictionary, Crime, Encyclopedia, Drama, Guide, Fairytale, Health/fitness, Fantasy, History,\
      Graphic novel, Home and garden, Historical fiction, Humor, Horror, Journal, Mystery, Math, Paranormal romance, \
      Memoir, Picture book, Philosophy, Poetry, Prayer, Political thriller, Religion, spirituality, and new age, \
      Romance, Textbook, Satire, True crime, Science fiction, Review, Short story, Science, Suspense, Self help, \
      Thriller, Sports and leisure, Western, Travel, Young adult, True crime"
    },
    {
      name: 'description',
      type: 'string',
      description: 'Randomly generated (fake) author.'
    },
    {
      name: 'isbn',
      type: 'string'
    },
    {
      name: 'date_published',
      type: 'string',
      description: 'Randomly generated ISO string.'
    },
    {
      name: 'publisher',
      type: 'string',
      description: 'Randomly generated (fake) author.'
    }],
    queryParameters: [{
      name: 'total_rows',
      description: 'Total number of objects to be returned. The number should be between 1 and 1000. If invalid number is provided, the result will return 10 objects.',
      exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/books?total_rows=3',
      exampleResponse: [{
        id: 1,
        title: 'Yellow Caravan Instantly',
        author: 'Issy Meagan',
        genre: 'Western',
        description: 'Eiusmod non ipsum ex est irure sunt velit dolor deserunt.',
        isbn: '8746398371135',
        date_published: '1964-06-22T00:00:00.000Z',
        publisher: 'Aquamarine Condemned Publishing Corp'
      },
      {
        id: 2,
        title: 'Indigo Scooter Easily',
        author: 'Dorita Prudence',
        genre: 'Classic',
        description: 'Aliqua fugiat duis reprehenderit velit officia amet velit.',
        isbn: '8683076927244',
        date_published: '2013-03-23T00:00:00.000Z',
        publisher: 'Fuchsia Hon Publishing'
      },
      {
        id: 3,
        title: 'Yellow Truck Scarily',
        author: 'Cyb Tamar',
        genre: 'Historical fiction',
        description: 'Est dolor duis aliqua voluptate qui et adipisicing.',
        isbn: '3668575762972',
        date_published: '2002-07-02T00:00:00.000Z',
        publisher: 'Amethyst Dark Publishing Corp'
      }
      ],
      notes: 'Specified number can be between 1 and 1000'
    }, {
      name: 'genre',
      description: "Filter by genre. List of possible options: Action/adventure, Art/architecture, Alternate history, Autobiography, Anthology, Biography, \
      Chick lit, Business/economics, Children's, Crafts/hobbies, Classic, Cookbook, Comic book, Diary, \
      Coming-of-age, Dictionary, Crime, Encyclopedia, Drama, Guide, Fairytale, Health/fitness, Fantasy, History,\
      Graphic novel, Home and garden, Historical fiction, Humor, Horror, Journal, Mystery, Math, Paranormal romance, \
      Memoir, Picture book, Philosophy, Poetry, Prayer, Political thriller, Religion, spirituality, and new age, \
      Romance, Textbook, Satire, True crime, Science fiction, Review, Short story, Science, Suspense, Self help, \
      Thriller, Sports and leisure, Western, Travel, Young adult, True crime",
      exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/books?total_rows=3&genre=biography',
      exampleResponse: [{
        id: 50,
        title: 'Harlequin Wall',
        author: 'Bertine Margot',
        genre: 'Biography',
        description: 'Eiusmod mollit anim sint ex deserunt fugiat sit ullamco.',
        isbn: '2917837683338',
        date_published: '1977-08-18T00:00:00.000Z',
        publisher: 'Indigo Mid Publishing Corp'
      }, {
        id: 424,
        title: 'Maroon Jewellery Coaxingly',
        author: 'Lacy Jessika',
        genre: 'Biography',
        description: 'Eiusmod nisi dolore exercitation sit cupidatat officia ea.',
        isbn: '2446096002458',
        date_published: '1964-05-14T00:00:00.000Z',
        publisher: 'Beige Inclined Publishing'
      }, {
        id: 442,
        title: 'White Refrigerator',
        author: 'Linell Dulcine',
        genre: 'Biography',
        description: 'Minim ad in voluptate do id id consectetur nisi.',
        isbn: '8492762212043',
        date_published: '2005-11-06T00:00:00.000Z',
        publisher: 'Blush Growing Publishing'
      }],
      notes: "To filter by multiple genres, add 'genre' parameter for each genre. Genres are real book genres, but everything else in the returned object is completely made up."
    }]
  },
  companies: {
    endpoint: '/companies',
    title: 'Companies',
    method: 'GET',
    endpointDescription: 'Retrieves a company object, containing information about a fake US based company. Currently response returns an array of 10 objects by default.',
    objectName: 'Company',
    object: [{
      name: 'id',
      type: 'integer',
      description: 'Unique identifier.'
    },
    {
      name: 'name',
      type: 'string',
      description: 'Randomly generated (fake) company name.'
    },
    {
      name: 'phone',
      type: 'string',
      description: 'Randomly generated (fake) phone number.'
    },
    {
      name: 'country',
      type: 'string',
      description: 'Currently all objects have US as their country'
    },
    {
      name: 'state',
      type: 'string',
      description: 'Currently all objects have US states only'
    },
    {
      name: 'city',
      type: 'string'
    },
    {
      name: 'address',
      type: 'string',
      description: 'Randomly generated (fake) address.'
    },
    {
      name: 'zipcode',
      type: 'string',
      description: 'Currently all objects have US zipcodes only'
    },
    {
      name: 'website',
      type: 'string',
      description: 'Randomly generated (fake) company website.'
    }],
    queryParameters: [{
      name: 'total_rows',
      description: 'Total number of objects to be returned. The number should be between 1 and 1000. If invalid number is provided, the result will return 10 objects.',
      exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/companies?total_rows=3',
      exampleResponse: [
        {
          id: 1,
          name: 'Yellow Appropriate Ltd',
          phone: '936-880-7269',
          country: 'US',
          state: 'PA',
          city: 'Jacksonville',
          address: '8628 Maple Street',
          zipcode: '42355',
          website: 'www.ugliestliterary.io'
        },
        {
          id: 2,
          name: 'Salmon Central LLC',
          phone: '410-233-8364',
          country: 'US',
          state: 'VT',
          city: 'City',
          address: '8525 7th Avenue ',
          zipcode: '48819',
          website: 'www.dulllogical.net'
        },
        {
          id: 3,
          name: 'Coral Corresponding LLC',
          phone: '847-670-6430',
          country: 'US',
          state: 'ID',
          city: 'Claire',
          address: '4053 6th Street North',
          zipcode: '28130',
          website: 'www.grumpyslow.net'
        }],
      notes: 'Specified number can be between 1 and 1000. All data in the returned object is made up.'
    }]
  },
  movies: {
    endpoint: '/movies',
    title: 'Movies',
    method: 'GET',
    endpointDescription: 'Retrieves a movie object, containing information about a fake movie. Currently response returns an array of 10 objects by default.',
    objectName: 'Movie',
    object: [{
      name: 'id',
      type: 'integer',
      description: 'Unique identifier.'
    },
    {
      name: 'title',
      type: 'string',
      description: 'Randomly generated (fake) movie title.'
    },
    {
      name: 'genre',
      type: 'string',
      description: "One of: Action/adventure, \
      Alternate history, Biography, Children's, Classic, Comics, Coming-of-age, \
      Crime, Drama, Fairytale, Fantasy, History, Historical fiction, Humor, Horror, Mystery, Paranormal,\
      Political thriller, Romance, Satire, True crime, Science fiction, Independent Short, Suspense,\
      Thriller,  Western, Travel, Young adult"
    },
    {
      name: 'director',
      type: 'string',
      description: 'Randomly generated (fake) movie director first and last name.'
    },
    {
      name: 'description',
      type: 'string',
      description: 'Lorem ipsum type description.'
    },
    {
      name: 'movie_length_minutes',
      type: 'integer'
    },
    {
      name: 'date_released',
      type: 'string',
      description: 'Randomly generated ISO string.'
    },
    {
      name: 'top_cast',
      type: 'string',
      description: 'Randomly generated one or more actor names (fake).'
    }],
    queryParameters: [
      {
        name: 'total_rows',
        description: '',
        exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/addresses?total_rows=3',
        exampleResponse: [
          {
            id: 1,
            title: 'Straight Van Reduce',
            genre: 'Classic',
            director: 'Denyse Rhea',
            description: 'Reprehenderit pariatur nostrud excepteur.',
            movie_length_minutes: 142,
            date_released: '1982-10-08T00:00:00.000Z',
            top_cast: 'Gretal Ivette, Tomasine Tallulah'
          },
          {
            id: 2,
            title: 'The Thick',
            genre: 'Paranormal',
            director: 'Carole Tessi',
            description: 'Veniam anim officia commodo.',
            movie_length_minutes: 74,
            date_released: '2012-08-29T00:00:00.000Z',
            top_cast: 'Dulciana Junina'
          },
          {
            id: 3,
            title: 'Broad Balloon',
            genre: 'Romance',
            director: 'Roselia Lynett',
            description: 'Et ad ex adipisicing id cupidatat ut excepteur eiusmod cillum.',
            movie_length_minutes: 80,
            date_released: '1994-01-14T00:00:00.000Z',
            top_cast: 'Justinn Laverna, Michal Janot'
          }
        ],
        notes: 'Specified number can be between 1 and 1000'
      },
      {
        name: 'genre',
        description: "Return rows for a specific genre or a number of genres. List of possible options: Action/adventure, \
        Alternate history, Biography, Children's, Classic, Comics, Coming-of-age, \
        Crime, Drama, Fairytale, Fantasy, History, Historical fiction, Humor, Horror, Mystery, Paranormal,\
        Political thriller, Romance, Satire, True crime, Science fiction, Independent Short, Suspense,\
        Thriller,  Western, Travel, Young adult",
        exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/movies?total_rows=3&genre=thriller',
        exampleResponse: [
          {
            id: 4,
            title: 'The Tropical',
            genre: 'Thriller',
            director: 'Leandra Bettye',
            description: 'Deserunt officia fugiat ex.',
            movie_length_minutes: 104,
            date_released: '2010-10-28T00:00:00.000Z',
            top_cast: 'Florina Sybila, Shanie Melodee'
          },
          {
            id: 46,
            title: 'Slight Glass',
            genre: 'Thriller',
            director: 'Lanny Albertina',
            description: 'Nostrud consectetur officia dolor.',
            movie_length_minutes: 181,
            date_released: '1989-07-27T00:00:00.000Z',
            top_cast: 'Deerdre Lona'
          },
          {
            id: 75,
            title: 'The Repulsive',
            genre: 'Thriller',
            director: 'Elicia Elissa',
            description: 'Commodo nulla incididunt ipsum proident culpa tempor culpa irure cillum.',
            movie_length_minutes: 148,
            date_released: '2005-10-04T00:00:00.000Z',
            top_cast: 'Caterina Margit, Ainsley Bernadene'
          }
        ],
        notes: "To filter by multiple genres, add 'genre' parameter for each genre. Genres are real movie genres, but everything else in the returned object is completely made up."
      }
    ]
  },
  products: {
    endpoint: '/products',
    title: 'Products',
    method: 'GET',
    endpointDescription: 'Retrieves a product object, containing information about a fake product. Currently response returns an array of 10 objects by default.',
    objectName: 'Product',
    object: [{
      name: 'id',
      type: 'integer',
      description: 'Unique identifier.'
    },
    {
      name: 'title',
      type: 'string',
      description: 'Randomly generated (fake) product title.'
    },
    {
      name: 'description',
      type: 'string',
      description: 'Lorem ipsum type description.'
    },
    {
      name: 'price',
      type: 'string'
    },
    {
      name: 'category',
      type: 'string',
      description: 'Categories are entirely made up.'
    },
    {
      name: 'sku',
      type: 'string'
    },
    {
      name: 'stock_quantity',
      type: 'integer'
    }],
    queryParameters: [{
      name: 'total_rows',
      description: 'Total number of objects to be returned. The number should be between 1 and 1000. If invalid number is provided, the result will return 10 objects.',
      exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/products?total_rows=3',
      exampleResponse: [{
        id: 1,
        title: 'Lavender Match',
        description: 'Ipsum dolor culpa consectetur. Cillum enim elit officia consequat eiusmod culpa exercitation cillum incididunt. Et deserunt qui esse reprehenderit tempor enim consectetur voluptate enim.',
        price: '701.05',
        category: 'Close',
        sku: 'H298-55-197 ',
        stock_quantity: 371
      },
      {
        id: 2,
        title: 'Amaranth Shoe',
        description: 'Deserunt excepteur nulla aliqua qui proident eiusmod sint aliqua. Anim tempor nisi nisi exercitation irure. Excepteur fugiat exercitation eiusmod pariatur exercitation.',
        price: '454.80',
        category: 'Western',
        sku: 'Q519-21-219 ',
        stock_quantity: 324
      },
      {
        id: 3,
        title: 'Rose Jewellery',
        description: 'Do aute Lorem amet duis consequat anim et. Nulla ut duis ut velit dolor laborum aliqua. Officia elit aute mollit.',
        price: '231.05',
        category: 'Sudden',
        sku: 'O538-28-994 ',
        stock_quantity: 810
      }],
      notes: 'Specified number can be between 1 and 1000'
    }]
  },

  users: {
    endpoint: '/users',
    title: 'Users',
    method: 'GET',
    endpointDescription: 'Retrieves a user object, containing information about a fake user.',
    objectName: 'User',
    object: [{
      name: 'id',
      type: 'integer',
      description: 'Unique identifier.'
    },
    {
      name: 'first_name',
      type: 'string',
      description: "Randomly generated (fake) person's first name."
    },
    {
      name: 'last_name',
      type: 'string',
      description: "Randomly generated (fake) person's last name."
    },
    {
      name: 'username',
      type: 'string',
      description: 'Randomly generated (fake) username.'
    },
    {
      name: 'password',
      type: 'string',
      description: 'Randomly generated (fake) password.'
    },
    {
      name: 'email',
      type: 'string',
      description: 'Randomly generated (fake) email.'
    }],
    queryParameters: [{
      name: 'total_rows',
      description: 'Total number of objects to be returned. The number should be between 1 and 1000. If invalid number is provided, the result will return 10 objects.',
      exampleRequestURL: 'https://fakefakerapi.herokuapp.com/api/v1/users?total_rows=3',
      exampleResponse: [
        {
          id: 1,
          first_name: 'Annabal',
          last_name: 'Abigale',
          username: 'martie16',
          password: 'jp7#zx%M&',
          email: 'marcy22@hive.com'
        },
        {
          id: 2,
          first_name: 'Madonna',
          last_name: 'Ricki',
          username: 'ekaterina127',
          password: 'ke6-cNVq#',
          email: 'gabriella51@lotmail.com'
        },
        {
          id: 3,
          first_name: 'Hildy',
          last_name: 'Danila',
          username: 'jandy169',
          password: 'vf8%LLMb*',
          email: 'coletta37@lotmail.com'
        }
      ],
      notes: 'Specified number can be between 1 and 1000'
    }]
  }
};

module.exports = {
  endpointDescription
};
