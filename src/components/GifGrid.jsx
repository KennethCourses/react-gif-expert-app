import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {isLoading ? <h2>Cargando...</h2> : null}
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid;