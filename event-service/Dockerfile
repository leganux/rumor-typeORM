# Use the official Node.js image
FROM node:20-alpine


ENV ENVIRONMENT=stage
ENV PORT_API=3010
ENV PORT_GRCP=50058
ENV DB_HOST=postgres
ENV DB_PORT=5432
ENV DB_PASSWORD=1234567890
ENV DB_DATABASE=rumor


RUN apk add curl


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 50058
EXPOSE 3010

# Command to run the application
CMD ["npm", "start"]
