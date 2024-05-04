import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            <div className='card-grid'>
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </div>
    )
}

export default GifGrid;