#  E-commerce API
This is a RESTful API for an e-commerce system built using Node.js, Express, and MongoDB.
## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB
- Postman

  ## Interacting with the API

To interact with the e-commerce API, you can use tools like [Postman](https://www.postman.com/) or any other API testing tool. Below are the details on how to perform various operations.

### Base URL

The base URL for the API is `http://localhost:3000/api`.



#### 1. Create a Product (POST)
create a post by using http://localhost:3000/api/product url.
### Endpoints

#### 2. Get All Products (GET)
GET http://localhost:3000/api/product

#### 3. Get a Product by ID (GET)
GET http://localhost:3000/api/product/:id 

#### 4.Update a Product by ID (PUT)
PUT http://localhost:3000/api/products/:id

Request Body:

{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 59.99
}

#### 5.Delete a Product by ID (DELETE)
 DELETE  http://localhost:3000/api/products/:id
 
 #### 6. Search for Products (GET)
 GET http://localhost:3000/api/search?keyword=searchKeyword


 Example Usage in Postman
Open Postman and create a new request.
Set the request type to "POST" or "GET" as needed.
Enter the appropriate URL (e.g., http://localhost:3000/api/products).
Set the request headers (if needed).
Enter the request body (for POST and PUT requests).
Click the "Send" button to make the request.


In this section, I've provided examples of various CRUD operations and a search functionality. Customize the examples based on your specific API endpoints and requirements. Users can use these instructions and examples to interact with your API efficiently.


### The output of Postman is proived in Output Folders.
 

