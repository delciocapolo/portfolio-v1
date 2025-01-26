import { PeriodIfEmptyPipe } from './period-if-empty.pipe';

describe('PeriodIfEmptyPipe', () => {
  let pipe: PeriodIfEmptyPipe;

  beforeEach(() => {
    pipe = new PeriodIfEmptyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
