const BASE_URL = 'http://localhost:4040'

// const options = {
//     method: 'PATCH',
//     headers: {
//         "Content-Type": 'application/json'
//     },
//     body: JSON.stringify({ title: 'New BEST title' }),
// }

// fetch(`${BASE_URL}/books/fql-f6k`, options)
//     .then(response => response.json())
//     .then(console.log)

function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(update),
    }
    return fetch(`${BASE_URL}/books/${bookId}`, options)
        .then(response => response.json())
        .then(console.log)
}
updateBookById({ title: 'New BEST title 69' }, 'M2mQxzA')