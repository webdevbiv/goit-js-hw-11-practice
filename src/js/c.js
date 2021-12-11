const BASE_URL = 'http://localhost:4040'

const newBook = {
    title: 'test book',
    author: 'test author',
    genre: ['test genre'],
    rating: 8,
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
};

// fetch('http://localhost:4040/books', options)
//     .then(response => response.json())
//     .then(console.log)

function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    }

    return fetch(`${BASE_URL}/books`, options)
        .then(response => response.json())
        .then(console.log)
}

addBook(newBook) 