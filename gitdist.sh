#!/usr/bin/env bash

#abort if any command fails
set -o errexit

deploy_directory=dist
deploy_branch=master

#repository to deploy to. must be readable and writable.
repo=origin

if [[ $1 = "-v" || $1 = "--verbose" ]]; then
	verbose=true
fi

#echo expanded commands as they are executed (for debugging)
function enable_expanded_output {
	if [ $verbose ]; then
		set -o xtrace
		set +o verbose
	fi
}

#this is used to avoid outputting the repo URL, which may contain a secret token
function disable_expanded_output {
	if [ $verbose ]; then
		set +o xtrace
		set -o verbose
	fi
}

enable_expanded_output

commit_title=`git log -n 1 --format="%s" HEAD`
commit_hash=`git log -n 1 --format="%H" HEAD`
previous_branch=`git rev-parse --abbrev-ref HEAD`

if ! git diff --exit-code --quiet --cached; then
	echo Aborting due to uncommitted changes in the index
	exit 1
fi

#make deploy_branch the current branch
git symbolic-ref HEAD refs/heads/$deploy_branch

#put the previously committed contents of deploy_branch branch into the index
git --work-tree "$deploy_directory" reset --mixed --quiet

set +o errexit
git --work-tree "$deploy_directory" "$@"
set -o errexit

if [[ $previous_branch = "HEAD" ]]; then
	#we weren't on any branch before, so just set HEAD back to the commit it was on
	git update-ref --no-deref HEAD $commit_hash $deploy_branch
else
	git symbolic-ref HEAD refs/heads/$previous_branch
fi

git reset --mixed
