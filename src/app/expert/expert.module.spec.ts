import { ExpertModule } from './expert.module';

describe('ExpertModule', () => {
  let expertModule: ExpertModule;

  beforeEach(() => {
    expertModule = new ExpertModule();
  });

  it('should create an instance', () => {
    expect(expertModule).toBeTruthy();
  });
});
