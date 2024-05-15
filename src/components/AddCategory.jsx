import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        newInputValue.length <= 3 ? null : onNewCategory(newInputValue), setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} data-testid="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

export default AddCategory;