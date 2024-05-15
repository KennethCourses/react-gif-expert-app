import { render, screen } from '@testing-library/react'
import GifGrid from '../../src/components/GifGrid'
import useFetchGifs from '../../src/hooks/useFetchGifs'
import { getGifs } from '../../src/helpers/getGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing to GifGrid component.', () => {

    const category = 'Fortnite Battle Royale'

    test('Should show loading... text in h2', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />)
        screen.debug();

        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toEqual('Cargando...');
    })

    test('Should show items when charge the images with useFetchGifs', async () => {

        const images = await getGifs(category);

        useFetchGifs.mockReturnValue({
            images,
            isLoading: false
        });

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(10);
    })
})