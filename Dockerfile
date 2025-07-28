FROM node:18-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy package files
COPY package.json yarn.lock ./
RUN yarn

# Copy source code
COPY . .

CMD ["yarn", "start"]