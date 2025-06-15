
# MERN App Docker Assignment

## Project Description
This is a full-stack MERN application containerized using Docker and Docker Compose. It includes:
- React frontend
- Node.js Express backend
- MongoDB database
  

## Instructions to Build and Run the App Locally

### Prerequisites
- Docker installed  
- Docker Compose installed
- Easy(Just install docker desktop , open & run the engine  it will have both docker and docker compose)

### Steps
1. Clone the repository:
   i. git clone https://github.com/Rahi88/mern-docker-assignment.git
   ii.cd mern-docker-assignment

2.Build and Run the Containers:
 --docker-compose up --build  (cmd to build containers all at once)
It will start:
   i. Backend on: http://localhost:5000/api/users
   ii.Frontend on: http://localhost:3000/
3.Stopping the App
--docker-compose down

### Notes:
1.Fully Dockerized MERN stack application.
2.Simple build & run using Docker Compose.
3.For any issues, check Docker Desktop logs or container logs.
