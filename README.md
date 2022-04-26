# MERN Test Task

This is a test task built on top of React, Node and MongoDB.

## Start Docker build

To start the app locally, run following command

```
docker-compose up --build
```

Note: Make sure to have docker installed and running.

## Backend

Backend will be running on <a href="http://localhost:8000">http://localhost:8000</a>

API Doc <a href="http://localhost:8000/api-docs">http://localhost:8000/api-docs</a>

## UI

UI will be running on <a href="http://localhost:8001">http://localhost:8001</a>

## About Project

This is a sample project that has following pages built with React.

- Homepage: /
- Services Writing: /services/:slug
- Checkout: /checkout/:serviceId/:tierId/:slug

### Homepage

On homepage, we fetch services from api, each service has its name, slug and description loaded from the API.
Clicking on the “View details” button, the user gets to the service page.
Service name and description, tier prices and descriptions is loaded from the API, according to the currently open service page.
There is a button for every tier that says “Buy now” and lead the user to the checkout page.

The “your cart” section displays one item, showing correct service name, tier name and price. 
Checkout form has the following ones, validated as described: 

- First name and Last name (Both required)
- Email (Required and in correct format) 
- Address (Required)
- Country, State, Zip (Required)
- Payment: has only “Paypal” option. 

Once the user pushes the “Continue to checkout” button, given the form is valid, calls an api to save all the user details in the database, and displays message about a success or an error as an alert with corresponding color and text.

