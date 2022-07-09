#!/usr/bin/env sh


# abort on errors
set -e

echo "Building..."

# build
npm run build

#custom 404 + router suppor
cp dist/index.html dist/404.html

echo "Pushing..."


# push changes
cd dist

git init
git checkout -b main
git add .
git commit -m "deploy"

git push git@github.com:Waujito/waujito.github.io.git main:gh-pages --force

echo "Deployed successfully"

cd ..

rm -rf dist