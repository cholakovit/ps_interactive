import { distanceBetweenTwoPoints } from './apiSlice'

const randomSpy = jest.spyOn(Math, 'atan2')

describe('', () => {
    it('called distanceBetweenTwoPoints with coordinates: 42.7034111, 23.4862259, 42.6665921, 23.351723', () => {

        expect(distanceBetweenTwoPoints(42.7034111, 23.4862259, 42.6665921, 23.351723)).toBe(NaN)
        expect(Math.atan2).toHaveBeenCalledTimes(1);
      });
})