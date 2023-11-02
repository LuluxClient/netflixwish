import Trending from "../pages/Trending";

test('should return 1234', () => {
    const trending = new Trending();
    expect(trending.computedValue).toBe('1234');
})

//npm test trending.spec.js