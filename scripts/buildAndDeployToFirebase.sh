#!/bin/bash

testCafe () {
  npm  --prefix  testcafe  run  tcafe:ffch  --debug-on-fail
}

doAll () {
  if [[ -z "$(git status --porcelain)" ]]; then
    echo "Git Working directory clean"
  else
    echo
    echo "ERROR: Uncommitted changes - will not deploy"
    echo
    git status
    exit 1
  fi
  echo Starting build and deploy `date`
  set -x

  scriptDir="`dirname $0`"
  # $scriptDir/compileFirebaseRules.sh

  # To initialize, run: firebase use --add

  #   && cp -r assets dist \

  #git tag test_`date --utc +%Y-%m-%d_%H.%M.%SZ`

  #ng build \
  npm  lws  &

  time \
        npm  run  build.prod  \
    &&  TESTCAFE_URL="http://localhost:8811/"  testCafe  \
    &&  time  firebase  deploy  --only hosting  \
    &&  git tag deploy_`date -u +%Y-%m-%d__%H.%M.%SZ`  \
    &&  git push --tags  \
    &&  TESTCAFE_URL="https://lifedvisor.innotopic.com/"  testCafe

  Echo Finished "$0" `date`
}

time doAll
