# Base node image
FROM node:20

# Initialize work directory
WORKDIR /vue-project

# Bundle app source
COPY . .

# Install dependecies
RUN yarn install --frozen-lockfile

# Declare node env
ENV NODE_ENV production

# Build application
RUN yarn build

# Register application port
EXPOSE 3000

# Start application
CMD ["yarn", "start"]