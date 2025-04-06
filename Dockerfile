# Use a base image with the correct Node.js version
FROM node:20.12.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files (if available)
COPY package*.json ./

# Install dependencies using npm
RUN npm install --force

# Copy the rest of the application files to the container
COPY . .

# Run the build command to generate the dist directory
RUN npm run build

# Set environment variables (if necessary)
ENV NODE_ENV=production
ENV BRANCH_NAME=main

# Expose the port the app will run on
EXPOSE 1337

# Set the default command to run the app
CMD ["npm", "start"]