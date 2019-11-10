#!/bin/bash

#cd `dirname "$0"/..`

nRuns=2

runSingleTestRepetition() {
  echo "======================= RUN $i of $nRuns - `date`"
  time npm run test:ff
#    npx testcafe chrome --speed 0.1  ts_out/testsIndex.js
}

runAll() {
  sharedWithTestCafe="shared-with-testcafe"

  echo git status:
  git status
  git log -n 1

  set -x

#  cd testcafe && \
#    rm -r "$sharedWithTestCafe"
#    cp -r "../src/app/$sharedWithTestCafe" "../src/app/utils" . && \
#    npx tsc --outDir ts_out && \
    echo "Starting tests" && \
    cd testcafe && \
    for i in $(seq 1 ${nRuns}); do \
      runSingleTestRepetition; \
    done
}

time runAll

echo ===================== Tests Finished `date`
