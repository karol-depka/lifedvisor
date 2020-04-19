import { HintTestComponent } from '../components/hint.component';
import { expectTextExists } from '../utilsGlobal/utils';

import {
  Selector,
  t,
} from 'testcafe';

export class AskPage {

  async typeFilter(filter: string) {
    await t.typeText(`#askText`, filter, {replace: true, paste: true})
  }

  async expectHintVisible(hintText: string) {
    await expectTextExists(hintText)
  }

  async clickExpandAllButton() {
    await t.click(Selector(`label`).withText(`Expand All`))
  }

  async getVisibleHint(hintText: string) {
    await this.expectHintVisible(hintText)
    return new HintTestComponent(hintText)
  }
}

export const askPage = new AskPage()
