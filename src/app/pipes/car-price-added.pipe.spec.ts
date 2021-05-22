import { CarPriceAddedPipe } from './car-price-added.pipe';

describe('CarPriceAddedPipe', () => {
  it('create an instance', () => {
    const pipe = new CarPriceAddedPipe();
    expect(pipe).toBeTruthy();
  });
});
