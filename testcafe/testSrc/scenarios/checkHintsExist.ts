import { t, Selector } from 'testcafe';
import {
  expectTextExists,
} from '../utilsGlobal/utils';

export async function checkHintsExist() {
  console.log('checkHintsExist')
  await t.click(Selector(`*`).withExactText('Expand All'))

  await expectTextExists(`Programming when having trouble thinking/focusing`)
  await expectTextExists(`Remind myself that I am no longer bogged down/limited`)
  await expectTextExists(`(Example of something that is on intersection of multiple aspects; this could be taken from search keywords).`)

  await expectTextExists(`Benefits`)
  await expectTextExists(`more maneuverable in tight situations like security checkpoints, food places; saving time and frustration and risk of causing accident`)
  await expectTextExists(`less strain on the back while walking with it`)
}
