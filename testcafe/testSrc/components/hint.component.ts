import {
  Selector,
  t,
} from 'testcafe';

export class HintTestComponent {

  readonly selThisComponent = Selector(`app-hint`).withText(this.hintText);

  constructor(
    public hintText: string,
  ) {}

  async expandHowToImprove() {
    await t.click(this.selThisComponent.find(`label`).withText(`How to improve?`))
  }

  async expectChildHintVisible(hintText: string) {
    await t.expect(this.selChildHint(hintText).exists).ok('expected child hint to exist: ' + hintText)
  }

  async expectVisible() {
    await t.expect(this.selThisComponent.exists).ok()
  }

  selChildHint(hintText: string): Selector {
    return this.selThisComponent.find(`app-hint`).withText(hintText)
  }
}
