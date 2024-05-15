import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

describe('Testing to useFetchGifs Custom React Hook.', () => {

    test('Should return initial state', () => {

        const { result } = renderHook(() => useFetchGifs('Fortnite Battle Royale'));
        const { images, isLoading } = result.current;

        expect(images).toEqual([]);
        expect(isLoading).toBeTruthy();
    })

    test('Should return new state with new images and isLoading like false', async () => {

        const { result } = renderHook(() => useFetchGifs('Fortnite Battle Royale'));

        await waitFor(() => {
            const { images } = result.current;
            expect(images.length).toBeGreaterThan(0);
        })

        const { images, isLoading } = result.current;

        expect(images.length).toBe(10);
        expect(isLoading).toBeFalsy();
    })
})