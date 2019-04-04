FROM node:latest

LABEL version="1.0"
LABEL description="This is the node server Docker image."

WORKDIR "/var/www/html/"
RUN ["npx", "webpack-cli", "init", "--quiet"]

CMD [ "yarn", "start" ]
EXPOSE 3000
