import { getGifs } from "../../src/helpers/getGifs";

describe('Testing to getGifs helper.', () => {

    test('Should return gifs array', async () => {

        const gifs = await getGifs('Fortnite');

        expect(gifs.length).toBe(10);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })
})