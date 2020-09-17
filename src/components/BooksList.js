import React from 'react'
import { connect } from 'react-redux'
import Book from '../containers/Book'
import { deleteBook } from '../actions/index'
// import { useSelector } from 'react-redux'

const BooksList = ({ books }) => {

    // const books = useSelector( state  => state.booksReducer)

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
                        <Book book = {book} key={book.id} handleRemoveBook = { deleteBook }/>
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

const BooksListConnect = connect(mapStateToProps, null)(BooksList)

export default BooksListConnect;