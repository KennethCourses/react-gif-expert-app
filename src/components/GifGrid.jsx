import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    getGifs(category);

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid;