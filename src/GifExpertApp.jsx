import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Invencible', 'Fortnite']);

    const onAddCategory = () => {
        const newCategory = 'Fallout';
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                setCategories={setCategories}
            />

            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}

export default GifExpertApp;