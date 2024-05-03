import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Invencible']);

    const onAddCategory = (newCategory) => {
        const category = newCategory.toLowerCase();
        categories.includes(category) ? alert('Category Already Exists') : setCategories([category, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}

export default GifExpertApp;