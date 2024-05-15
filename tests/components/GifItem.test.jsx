import { render, screen } from '@testing-library/react'
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

    test('Should show the image with URL and description alt', () => {

        render(
            <GifItem
                title={title}
                url={url}
            />
        )

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Should show title', () => {

        render(
            <GifItem
                title={title}
                url={url}
            />
        )

        expect(screen.getByText(title)).toBeTruthy();
    })
})