eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

cd /home/ubuntu/react/deploy_react &&
git pull && 
npm install &&
npm run build
