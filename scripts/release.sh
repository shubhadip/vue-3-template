#commit the dist to the tagged file

#$1 => tagged version


#checkout the tagged file

git fetch 

git checkout -f $1

echo "---Checked out tagged version---"


#delete the tag remotely/locally

git push --delete origin $1

git tag -d $1

echo "---Deleted the tag---"


#build

rimraf /dist 

yarn run build

echo "---Build complete---"


#commit the dist files

git add -f dist

git commit -m "chore: addition of dist files [skip ci]"

echo "---Committed the dist folder---"


#tag them

git tag $1 

git push origin $1 

echo "---Tag Updated---"


#checkout to the main branch

git checkout $2
