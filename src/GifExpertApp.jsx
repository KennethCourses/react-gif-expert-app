import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['SPIDER-MAN']);

    const onAddCategory = (newCategory) => {
        const category = newCategory.toUpperCase();
        categories.includes(category) ? alert('Category Already Exists') : setCategories([category, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            <ol>
                {categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )}
            </ol>
        </>
    )
}

export default GifExpertApp;