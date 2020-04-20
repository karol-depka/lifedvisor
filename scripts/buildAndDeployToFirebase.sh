#!/bin/bash

doAll () {
  if [[ -z "$(git status --porcelain)" ]]; then
    echo "Git Working directory clean"
  else
    echo
    echo "ERROR: Uncommitted changes - unable will not deploy"
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

  export TESTCAFE_URL="http://localhost:8811/" # lws
  time \
    scripts/testCafe.sh  --debug-on-fail  \
    &&  npm  run  build.prod  \
    &&  time  firebase deploy --only hosting  \
    &&  export TESTCAFE_URL="https://lifedvisor.innotopic.com/"  \
    &&  git tag deploy_`date -u +%Y-%m-%d__%H.%M.%SZ`  \
    &&  git push --tags  \
    &&  scripts/testCafe.sh  --debug-on-fail

  Echo Finished "$0" `date`
}

time doAll
