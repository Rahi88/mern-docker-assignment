# Start from official Node.js 18 image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package.json first to install dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy rest of the app files
COPY . .

# Build the React production files
RUN npm run build

# Install serve package to serve the build files
RUN npm install -g serve

# Expose port for serve
EXPOSE 3000

# Start the app using serve
CMD ["serve", "-s", "build"]

