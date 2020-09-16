import React from 'react'
// import { connect } from 'react-redux'
import Book from '../containers/Book'
import { useSelector } from 'react-redux'

const BooksList = () => {

    const books = useSelector( state  => state.booksReducer)

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Category</th>
                    </tr>
                </thead>
               <tbody>
                   {
                       books.map( book => (
                        <Book book = {book} key={book.id}/>
                       ))
                   }
                </tbody> 
            </table>
        </div>
    )
}

// const mapStateToProps = state => ({
//     books: state.booksReducer,
// })

// const BooksListConnect = connect(mapStateToProps, null)(BooksList)

export default BooksList;