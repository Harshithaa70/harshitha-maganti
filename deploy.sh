#!/bin/bash

# Script to automate deployment to GitHub Pages

echo "Starting deployment to GitHub Pages..."

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed, aborting deployment."
  exit 1
fi

echo "Build completed successfully."

# Copy 404.html (SPA workaround for GitHub Pages)
echo "Creating 404.html for SPA routing..."
cp dist/index.html dist/404.html

# Deploy using gh-pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete! Your site is now live at: https://Harshithaa70.github.io/harshitha-maganti/"
