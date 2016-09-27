FROM node:6.6-onbuild
# replace this with your application's default port
RUN npm i mocha -g
EXPOSE 3001
