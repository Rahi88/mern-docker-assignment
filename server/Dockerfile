# Start from official Node.js 18 image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package.json first to install dependencies
COPY package.json ./
RUN npm install

# Copy rest of the app files
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the app using serve
CMD ["node", "server.js"]
