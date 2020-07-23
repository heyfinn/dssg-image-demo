//deploy.sh
#!/usr/bin/env sh
set -e
npm run build
cd dist
git init //因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git add -A
git commit -m 'deploy'
git push -f https://github.com/heyfinn/dssg-image-demo.git master:gh-pages

cd -
