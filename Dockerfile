FROM node


COPY package.json package.json
COPY index.js index.js
COPY package-lock.json package-lock.json
COPY db.js db.js


# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run your application
ENTRYPOINT ["node", "index.js"]
