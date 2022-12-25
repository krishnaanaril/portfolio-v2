#!/bin/bash
echo "Deployment started"
node  build-scripts/generators.mjs
echo "Step 1/7 completed"
git commit -am "update sitemap.xml"
echo "Step 2/7 completed"
npm run build:prod;
echo "Step 3/7 completed"
touch out/.nojekyll;
echo "Step 4/7 completed"
cp CNAME out/CNAME;
echo "Step 5/7 completed"
git add out/ && git commit -m \"Deploy\";
echo "Step 6/7 completed"
git subtree push --prefix out upstream gh-pages;
echo "Step 7/7"
echo "Deployment completed"