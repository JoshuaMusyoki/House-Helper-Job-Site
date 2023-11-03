FROM node:14.8.0-alpine3.12
WORKDIR /front
COPY package.json ./ 
RUN npm install 
COPY . ./ 
EXPOSE 8080
CMD ["npm","run","serve"]
