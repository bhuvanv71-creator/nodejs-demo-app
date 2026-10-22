#### \# Task 1: CI/CD Pipeline Using GitHub Actions

#### 

#### \## Elevate Labs DevOps Internship

#### 

#### \### Objective

#### Automate the testing and Docker image publishing of a Node.js application using GitHub Actions.

#### 

#### \### Tools Used

#### \- GitHub

#### \- GitHub Actions

#### \- Node.js

#### \- Docker

#### \- Docker Hub

#### 

#### \### Project Workflow

#### 1\. Push code to the GitHub main branch.

#### 2\. GitHub Actions automatically starts the workflow.

#### 3\. Install Node.js dependencies.

#### 4\. Run automated application tests.

#### 5\. Build a Docker image.

#### 6\. Push the Docker image to Docker Hub.

#### 

#### \### Application

#### The Node.js application runs on port 3000.

#### 

#### Local URL: http://localhost:3000

#### 

#### Health Check: http://localhost:3000/health

#### 

#### \### Docker Hub Repository

#### https://hub.docker.com/r/bhuvanverma/nodejs-demo-app

#### 

#### \### Results

#### \- Node.js tests passed successfully.

#### \- Docker image built successfully.

#### \- Docker image pushed to Docker Hub.

#### \- Application tested successfully in a local Docker container.

#### \- Both GitHub Actions jobs completed successfully.

#### 

#### \### Application Output

#### Version 1: DevOps CI/CD Pipeline is Working!

#### 

#### \### Conclusion

#### This project demonstrates CI/CD automation using GitHub Actions, Node.js testing, Docker image building, and Docker Hub publishing.

#### 

#### 

#### 

#### Node.js CI/CD Pipeline

## Overview

Automated testing and Docker image publishing using GitHub Actions.

## Technologies

* Node.js
* Git and GitHub
* GitHub Actions
* Docker
* Docker Hub

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

* / : Application message
* /health : Health status
* /version : Version information

## Workflow Location

.github/workflows/main.yml

