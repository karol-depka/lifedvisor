import {
  ClientFunction,
  Selector,
  t,
} from 'testcafe';

/** https://testcafe-discuss.devexpress.com/t/how-do-you-validate-url-in-testcafe/640 */
export const getWindowDocumentLocation = ClientFunction(() => document.location.href);

export const getWindowDocumentTitle = ClientFunction(() => document.title);

export async function expectExactTextExists(text: string) {
  await t.expect(Selector(`*`).withExactText(text).exists).ok(`Expecting exact text to exist: ${text}`)
}

export async function expectTextExists(text: string) {
  await t.expect(Selector(`*`).withText(text).exists).ok(`Expecting text to exist: ${text}`)
}

export function getRunAllTestsFromEnv() {
  const fromEnvToLowerTrimmed: string | undefined = process.env['TESTCAFE_RUN_ALL_TESTS'] ?. toLowerCase() ?. trim();
  const isFalse = ( fromEnvToLowerTrimmed === 'false' ) || ( fromEnvToLowerTrimmed === null ) || ( fromEnvToLowerTrimmed === undefined )
  // all other values are considered true, as an extra precaution
  return ! isFalse
}
