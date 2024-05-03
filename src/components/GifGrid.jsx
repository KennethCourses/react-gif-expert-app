import { useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    useEffect(() => {
        getGifs(category);
    }, [])

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid;