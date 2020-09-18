import React from 'react'


const CategoryFilter = ({ changeFilter }) => {
    const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    const handleFilterChange = filter => {
        changeFilter(filter);
      };

    return (
        <select name="category" onChange={handleFilterChange}>
            {
                categories.map(category => (
                <option key={ category }>{ category }</option>
                ))
            }
        </select>
    )
}

export default CategoryFilter