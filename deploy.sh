#!/usr/bin/env sh

set -e

pnpm build:github
pnpm generate:github

cd  dist
# cd  .output/public

git init 

git add -A

git commit -m '🎉deploy gh-pages🎉'

git push -f git@github.com:bestable-web/bestable.git main:gh-pages

cd ../..

cd -