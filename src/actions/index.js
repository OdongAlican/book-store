export const createBook = (book) => {
    return {
        type: 'CREATE_BOOK',
        payload: book
    }
}

export const deleteBook = (book) => {
    return {
        type: 'DELETE_BOOK',
        payload: book.id
    }
}