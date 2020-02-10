import { askPage } from './pages/ask.po';
import {LOCALHOST_URL} from './utilsGlobal/globals';
import {checkHintsExist} from './scenarios/checkHintsExist';
import {testRepetitions, testWrapper} from './utilsGlobal/testRunner';


(fixture (`Fixture: LifeDvisor Web` ) as any)
// .disablePageReloads
  .page(LOCALHOST_URL)
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


testRepetitions(() => {
  testWrapper('Check all hints exist and test search', async (t) => {
    await checkHintsExist()
    await askPage.typeFilter(`priorit`)
    await askPage.typeFilter(`a`)

    //
    await askPage.typeFilter(`surroundings clean`)

    await askPage.expectHint(`Make everyday real life more enjoyable`)
    await askPage.expectHint(`surroundings clean`)


    await askPage.typeFilter(`focus`)

    await askPage.expectHint(`When entering a potentially very distracting website`)
    await askPage.expectHint(`Focus on zone of influence, instead of zone of preoccupation`)

    await askPage.typeFilter(`procrastination`)
    await askPage.expectHint(`Consider and visualise the positive and negative consequences of doing and not doing the thing You should do. Focus on the positive, to keep dopamine level up.`)


  })

  // testWrapper('Test search', async t => {
  // })

})
