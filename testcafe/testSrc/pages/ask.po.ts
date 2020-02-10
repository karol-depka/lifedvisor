import { expectTextExists } from '../utilsGlobal/utils';

import { t } from 'testcafe';

export class AskPage {

  async typeFilter(filter: string) {
    await t.typeText(`#askText`, filter, {replace: true, paste: true})
  }

  async expectHint(hintText: string) {
    await expectTextExists(hintText)
  }
}

export const askPage = new AskPage()
