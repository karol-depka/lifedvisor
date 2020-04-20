import { askPage } from './pages/ask.po';
import { checkHintsExist } from './scenarios/checkHintsExist';
import { TESTCAFE_URL } from './utilsGlobal/globals';
import {
  testRepetitions,
  testWrapper,
} from './utilsGlobal/testRunner';
import { getRunAllTestsFromEnv } from './utilsGlobal/utils';

console.log(`Starting TestCafe tests`, new Date());

(fixture (`Fixture: LifeDvisor Web` ) as any)
// .disablePageReloads
  .page(TESTCAFE_URL)
// .beforeEach(async t => {
//   logDebug('beforeEach(')
// await dismissCookieLawViaCookie(t)
// });

// runner.screenshots({
//   takeOnFails: true
// });

// NOTE: Put fastest tests first, so that we see any failures quickly


// testWrapper('Log in via username & password', async () => {
//   await standardInitCookiesEnglishLogIn();
//   // https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
// })

const runAllTests = true || getRunAllTestsFromEnv()


testRepetitions(() => {
  if ( runAllTests || false ) testWrapper('Check all hints exist', async (t) => {
    await checkHintsExist()
  })

  if ( runAllTests || false ) testWrapper('Check all hints exist and test search', async (t) => {
    await askPage.clickExpandAllButton()

    await askPage.typeFilter(`priorit`)
    await askPage.typeFilter(`a`)

    //
    await askPage.typeFilter(`surroundings clean`)

    await askPage.expectHintVisible(`Make everyday real life more enjoyable`)
    await askPage.expectHintVisible(`surroundings clean`)


    await askPage.typeFilter(`focus`)

    await askPage.expectHintVisible(`When entering a potentially very distracting website`)
    await askPage.expectHintVisible(`Focus on zone of influence, instead of zone of preoccupation`)

    await askPage.typeFilter(`procrastination`)
    await askPage.expectHintVisible(`Consider and visualise the positive and negative consequences of doing and not doing the thing You should do. Focus on the positive, to keep dopamine level up.`)
  })

  if ( runAllTests || true ) testWrapper(`expand hint and child hint exists`, async () => {
    const hintComp = await askPage.getVisibleHint(`Fun/dopamine`)
    await hintComp.expandHowToImprove()
    await hintComp.expectChildHintVisible(`things like games could be about dosage and cost/benefit; and making breaks; and having exit strategy`)
  })

  if ( runAllTests || false ) testWrapper('Expand All', async t => {
    // useful for making sure all templates correctly render
    await askPage.clickExpandAllButton()
  })

  if ( runAllTests || true ) testWrapper('sub-element is expanded to show element matching search query', async t => {
    await askPage.typeFilter(`What to do in life`)
    await askPage.expectHintVisible(`What to do in life?`)
  })

  // TODO: test partial matching. E.g. "im feeling freaking annoyed" -> ...

})
