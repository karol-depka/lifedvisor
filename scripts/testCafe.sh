#!/bin/bash

#cd `dirname "$0"/..`

nRuns=1

runSingleTestRepetition() {
  echo "======================= RUN $i of $nRuns - `date`"
  echo pwd before testcafe: `pwd`
  time npm run test -- --live
#    npx testcafe chrome --speed 0.1  ts_out/testsIndex.js
}

runAll() {
  sharedWithTestCafe="shared-with-testcafe"
  rm -r ts_out

  pwd

  echo git status:
  git status
  git log -n 1

  set -x

#  cd testcafe && \
#    rm -r "$sharedWithTestCafe"
#    cp -r "../src/app/$sharedWithTestCafe" "../src/app/utils" . && \
#    npx tsc --outDir ts_out && \
# when I figure out how to use `include: ` - write answer to https://stackoverflow.com/questions/35734366/typescript-can-tsc-be-run-against-an-entire-folder
    cd testcafe && \
    echo "Starting tests" && \
    for i in $(seq 1 ${nRuns}); do \
      runSingleTestRepetition; \
    done
}

time runAll

echo ===================== Tests Finished `date`
