# Use the official Node.js v22.13.0 image as a base
FROM node:22.13.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies with --force
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Expose the port the Strapi app will run on (default is 1337)
EXPOSE 1337

# Start the Strapi application
CMD ["npm", "run", "start"]
