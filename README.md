# Node.js CI/CD Pipeline

## Overview
Automated testing and Docker image publishing using GitHub Actions.

## Technologies
- Node.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## CI/CD Workflow
1. Developer pushes code to the main branch.
2. GitHub Actions checks out the code.
3. Automated tests run.
4. Docker builds the application image.
5. The image is pushed to Docker Hub.

## Run Locally
npm install
npm test
npm start

## Application Endpoints
- / : Application message
- /health : Health status
- /version : Version information

## Workflow Location
.github/workflows/main.yml
