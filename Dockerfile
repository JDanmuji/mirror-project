# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# 도케에게 우리가 서버를 실행할 포트를 말해준다.
EXPOSE 3000

# 이미지가 생성될 때 실행되지 않고 컨테이너가 실행될 때 수행하는 명령어
CMD ["npm","start"]