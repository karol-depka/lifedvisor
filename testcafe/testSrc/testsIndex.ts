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
    await t.typeText(`#askText`, 'priorit')
  })

  testWrapper('Test search', async t => {
  })

})
