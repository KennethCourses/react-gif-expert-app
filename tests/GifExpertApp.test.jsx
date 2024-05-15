import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('Testing to GifExpertApp component.', () => {

    const newCategory = 'kenneth';
    const newCategory2 = 'sofia';

    test('Should show alert if the category exists', () => {

        render(<GifExpertApp />)

        const alert = jest.spyOn(window, 'alert').mockImplementation(() => { });
        const input = screen.getByRole('textbox');
        const form = screen.getByTestId('form');

        fireEvent.change(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        fireEvent.change(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        expect(alert).toHaveBeenCalledTimes(1);
        alert.mockRestore();
    })

    test('Should change state with a new category', () => {

        render(<GifExpertApp />)

        const input = screen.getByRole('textbox');
        const form = screen.getByTestId('form');

        fireEvent.change(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        fireEvent.change(input, { target: { value: newCategory2 } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
    })
})