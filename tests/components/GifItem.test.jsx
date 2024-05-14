import { render } from '@testing-library/react'
import GifItem from '../../src/components/GifItem';

describe('Testing to GifItem component.', () => {

    const title = 'Kenneth';
    const url = 'https://localhost/image.jpg';

    test('Should show the component correctly', () => {

        const { container } = render(
            <GifItem
                title={title}
                url={url}
            />
        )

        expect(container).toMatchSnapshot();
    })
})