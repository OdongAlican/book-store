import React from 'react'
import { createBook } from '../actions/index'
import { connect } from 'react-redux'


class BooksForm extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            title: '',
            category: 'Action',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event){
        event.preventDefault()

        const { title, category } = this.state
        const { addBook } = this.props

        const book = {
            id: Math.floor(Math.random() * 2000),
            title,
            category
        }

        this.setState({
            title: ''
        })

        addBook(book)
    }

    render(){

    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    const { title, category } = this.state
    
    return(
        <form onSubmit={this.handleSubmit}>
            <input name="title" value = { title } placeholder="Enter Book Title" type="text" onChange={this.handleChange}/>
            <select name="category" value = { category } onChange={this.handleChange}>
                { categories.map(category => (
                    <option key={category}>{ category }</option>
                ))}
             </select> 
             <button type="submit">Submit</button>
        </form> 
     )
    }
}

const mapDispatchToProps = dispatch => ({
    addBook: book => {
        dispatch(createBook(book))
    }
})

export default connect(null, mapDispatchToProps)(BooksForm);

// export default BooksForm