# Specify Base Image
FROM alpine

# Creating a woriking Directory
WORKDIR /usr/app

# Install redis in Alpine
RUN apk add --update redis

# Start the redis server
CMD ["redis-server"]