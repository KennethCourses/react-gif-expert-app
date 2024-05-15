import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('Testing to AddCategory component', () => {

    test('Should change the value of text box', () => {

        render(<AddCategory
            onNewCategory={() => { }}
        />);

        screen.debug();

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Kenneth' } }); // Simulate event with fireEvent

        expect(input.value).toBe('Kenneth');

        screen.debug();
    })

    test('Should call onNewCategory if input have value', () => {

        const inputValue = 'Kennneth';
        const onNewCategory = jest.fn(); // Simulate function

        render(<AddCategory
            onNewCategory={onNewCategory}
        />)

        const input = screen.getByRole('textbox');
        const form = screen.getByTestId('form');

        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        });
        fireEvent.submit(form);

        // expect(input.value).toBe('');
        // expect(onNewCategory).toHaveBeenCalled();
        // expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('Shouldnt call onNewCategory if input value is empty', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory
            onNewCategory={onNewCategory}
        />)

        const form = screen.getByTestId('form');

        fireEvent.submit(form);

        // expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
})