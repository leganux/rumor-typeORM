## API Gateway With TypeORM and database

This repository contains the code for an API Gateway that acts as an entry point to interact with microservices managing
orders and products. The API Gateway handles authentication, routing, and forwards requests to the appropriate
microservices. This README file provides instructions on how to execute and use the API Gateway.

### Prerequisites:

Docker installed on your machine.
Docker Compose installed on your machine.
Understanding of RESTful APIs and gRPC communication.
Execution:

1. Clone the Repository:
   Clone this repository to your local machine using the following command:

```bash
 git clone https://github.com/leganux/rumor-typeORM

 ```

2. Rename env_example on the api gateway, order and product services folders to .env (and modify them if needed)

```bash
mv env_example .env
```

3. Start Docker Compose:
   Run the following command to start Docker Compose, which will set up the API Gateway along with the required
   microservices:

```bash 
docker-compose up
```

4. Access the API:
   Once Docker Compose has successfully started, you can access the API using the base URL http://localhost:8080.

### Files and Folders

```text

 -rumor
    -api-gateway
    -grpc-protocols
    -event-service
    -user-service
    -invite-request-service
    -guest-service
    RADME.md
    docker-compose.yml
    
    
 ```

*Description Folders*

* api-gateway: Includes files from GO project, gateway api client is connected to product and order services.

* grpc-protocols: Includes generated files from protoc for both projects client service and servers in nestjs, includes
  proto files too.

* event-service: Includes order micro-service nestjs files to control events.
* user-service: Includes product micro-service nestjs files to control users.
* invite-request-service: Includes product micro-service nestjs files to control invite-request.
* guest-service: Includes product micro-service nestjs files to control guests.

* docker-compose.yml: The compose file to run all infrastructure of this project
* README.md: This file documentation
* rumor_typeorm.postman_collection.json: Its file of postman documentation

### Endpoints with examples:

* POST /login:
  Endpoint to authenticate and receive a JWT token. Requires a JSON body with username and password fields.

```javascript 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
    "Username": "admin",
    "Password": "Kt3RickS0n"
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
};

fetch("http://localhost:8080/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
```

### Response Standardized example

* status: The code status
* data: The information tha user request for
* error: The internal error message
* success: If request was correct or not
* Message: A message to show to user

*OK Response Example*

```json
{
  "status": 200,
  "data": {
    "products": [
      {
        "id": "1",
        "name": "Coke 100 Ml2",
        "description": "Soda 100 ML cola flavor2",
        "price": 34.2,
        "quantity": 5
      }
    ]
  },
  "error": "",
  "success": true,
  "message": "OK"
}

```

*Error Response Example*

```json
{
  "status": 500,
  "data": null,
  "error": "Internal Server Error: rpc error: code = Unknown desc = Internal server error",
  "success": false,
  "message": "Error retrieving product"
}
```

### Test

To execute testing

```bash
go test
```

<small>*note: Testing evaluates only mock structure of response, cause go cannot instantiate GRPC communication </small>

### Authentication:

To access any endpoint other than /login, you need to include the JWT token received from the /login endpoint in the
request headers under the key Authorization.

### Conclusion:

The API Gateway provides a centralized entry point to interact with microservices managing events, users, guests, and request-invitation. By
following the provided instructions, you can easily set up and utilize the API Gateway to perform various operations.

<hr>


<p align="center">
    <img src="https://www.kingtide.com/_next/static/media/logo.1fa4aea8.svg" width="100" title="hover text">
    <br>
  This project is a test for rumor made by <a href="https://www.kingtide.com">https://www.kingtide.com</a>  and Angel Erick Cruz O. &copy; 2024 rights reserved.
    <br>
   This project is distributed under the MIT license. 
    <br>
<br>
    The project was made with ♥️ by Angel Erick Cruz Olivera and KingTide team
<br>
<br>
This project was built with docker, nestjs, go, nodejs, grpc and other tools. Their logos and base software for their implementation reserve their rights to their own creators.
<br>
