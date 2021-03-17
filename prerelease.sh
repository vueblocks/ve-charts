#!/usr/bin/env sh

npm version prerelease --preid=alpha

git push

npm publish --tag next