
export const numRepetitions = 20

let runNum: number | null = null

export function testWrapper(title: string, testBody: (t: TestController) => Promise<void>) {
  const repetitionPrefix = (runNum === null || runNum === undefined) ? `(Not repeated)` : `---- (Repetition ${runNum} of ${numRepetitions})`
  test(title, async t => {
    const startMs = Date.now()
    console.log(`${repetitionPrefix} -- ${title}`)
    await testBody(t)
    const durSecs = ((Date.now() - startMs) / 1000).toFixed(1)
    console.log(`Took ${durSecs} seconds`)
  })
}

export function testRepetitions(testsDeclarationFunc: () => void) {
  for ( runNum = 1; runNum <= numRepetitions; ++runNum ) {
    console.log(`Init TestCafe tests repetition ${runNum} of ${numRepetitions}`);
    testsDeclarationFunc()
  }

}

