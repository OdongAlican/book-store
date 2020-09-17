import React from 'react'
import { connect } from 'react-redux'
import Book from '../containers/Book'
import { deleteBook } from '../actions/index'
// import { useSelector } from 'react-redux'

const BooksList = ({ books, deleteBook }) => {

    // const books = useSelector( state  => state.booksReducer)
    const handleRemoveBook = book => {
        deleteBook(book)
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
               <tbody>
                   {
                       books.map( book => (
                        <Book book = {book} key={book.id} handleRemove = { handleRemoveBook }/>
                       ))
                   }
                </tbody> 
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    books: state.booksReducer,
})

const mapDispatchToProps = dispatch => ({
    deleteBook: book => {
        dispatch(deleteBook(book))
    }
})

const BooksListConnect = connect(mapStateToProps, mapDispatchToProps)(BooksList)

export default BooksListConnect;