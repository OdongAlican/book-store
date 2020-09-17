import React from 'react'
// import { useDispatch } from 'react-redux'

const Book = ({ book, handleRemove }) => {
    // const dispatch = useDispatch()
    return (
              <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.category}</td>
                <td>
                    <button onClick={
                        // ()=>dispatch(handleRemoveBook(book))
                        () => handleRemove(book)
                    }>Remove Book</button>
                </td>
            </tr>
    )
}

export default Book