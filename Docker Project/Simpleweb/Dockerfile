# Specify Base Image
FROM node:18-alpine

# Creae Working Directory
WORKDIR /user/app

# Copy Package.json into the container
COPY package.json ./


# Install Dependecies
RUN npm install

# Copy all other file into the container
COPY ./ ./

# Start the server
CMD ["npm","start"]