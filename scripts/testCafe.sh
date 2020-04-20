#!/bin/bash

date

nRuns=1

runSingleRepetition() {
  echo "======================= RUN $i of $nRuns - `date`"
  echo Args For TestCafe: "$@"
  time npm run tcafe:repeated -- "$@"
  TESTCAFE_RET_ERR_CODE=$?
  echo testcafe return code: ${TESTCAFE_RET_ERR_CODE}
  return ${TESTCAFE_RET_ERR_CODE}
}

runAll() {
  echo git status:
  git status
  git log -n 1

  echo "Starting tests"
  cd testcafe && \
    for i in $(seq 1 ${nRuns}); do \
      runSingleRepetition "$@" ; \
      TESTCAFE_RET_ERR_CODE=$?
    done
  return ${TESTCAFE_RET_ERR_CODE}
}

time runAll "$@"
echo testcafe runAll return code: $?


echo ===================== Tests Finished `date`

exit ${TESTCAFE_RET_ERR_CODE}
