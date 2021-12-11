const BASE_URL = 'http://localhost:4040'
// fetch('http://localhost:4040/books/2')
//     .then(response => response.json())
//     .then(console.log)

function fetchBooks() {
    return fetch(`${BASE_URL}/books`)
        .then(response => response.json())
        .then(console.log)
}

function fetchBookById(id) {
    return fetch(`${BASE_URL}/books/${id}`)
        .then(response => response.json())
        .then(console.log)
}

fetchBooks()
fetchBookById(4)