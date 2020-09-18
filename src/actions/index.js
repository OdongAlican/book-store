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

export const changeFilter = (filter) => {
    return {
        type: 'CHANGE_FILTER',
        payload: filter
    }
}