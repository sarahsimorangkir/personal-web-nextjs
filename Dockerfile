FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

# docker build -t learn-docker .
# docker run -p 3000:3000 --name learn-docker-container --detach learn-docker
# docker container list

# heroku stack:set container --app <heroku-app-name>
