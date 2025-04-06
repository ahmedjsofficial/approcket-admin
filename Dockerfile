# Use a base image with the correct Node.js version
FROM node:22.13.0

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

# Expose the port the app will run on (if applicable)
EXPOSE 1337

# Set the default command to run the app
CMD ["npm", "start"]