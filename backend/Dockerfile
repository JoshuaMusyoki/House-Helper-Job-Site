# Official node.js image as base image
FROM node:10.19.0

# Label the maintainer of the code
LABEL maintainer="Joshua Musyoki"

# Specify the environment the application is running on
# Using production to improve performance
ENV NODE_ENV=production

# Create a working directory that serves as a default location for the subsequent commands
WORKDIR /myapp

# Using a wildcard to ensure both package.json and package-lock.json is copied.
COPY package.json ./

# Install node modules inside our image
RUN npm install --production

# Add source code into the image
COPY . ./

EXPOSE 8000

CMD [ "npm", "start" ]