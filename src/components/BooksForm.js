import React from 'react'

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


    render(){

    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    const { title, category } = this.state
    
    return(
        <form>
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


export default BooksForm;