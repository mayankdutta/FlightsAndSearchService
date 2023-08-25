# API Documentation

This documentation provides details about the routes and endpoints exposed by the `index.js` file located in the `route/v1` directory.

## Table of Contents

- [City Routes](#city-routes)

  - [Create a City](#create-a-city)
  - [Create Multiple Cities](#create-multiple-cities)
  - [Delete a City](#delete-a-city)
  - [Get a City by ID](#get-a-city-by-id)
  - [Get Airports of a City](#get-airports-of-a-city)
  - [Update a City](#update-a-city)
  - [Get All Cities](#get-all-cities)

- [Flight Routes](#flight-routes)

  - [Create a Flight](#create-a-flight)
  - [Get All Flights](#get-all-flights)
  - [Get a Flight by ID](#get-a-flight-by-id)
  - [Update a Flight](#update-a-flight)

- [Airport Routes](#airport-routes)
  - [Create an Airport](#create-an-airport)

---

## City Routes

### Create a City

**Endpoint:** `POST /city`

Creates a new city.

### Create Multiple Cities

**Endpoint:** `POST /cities`

Creates multiple cities in a single request.

### Delete a City

**Endpoint:** `DELETE /city/:id`

Deletes a city by its ID.

### Get a City by ID

**Endpoint:** `GET /city/:id`

Retrieves a city's information by its ID.

### Get Airports of a City

**Endpoint:** `GET /cityAirports/:name`

Retrieves the airports associated with a city by its name.

### Update a City

**Endpoint:** `PATCH /city/:id`

Updates a city's information by its ID.

### Get All Cities

**Endpoint:** `GET /city`

Retrieves a list of all cities.

---

## Flight Routes

### Create a Flight

**Endpoint:** `POST /flights`

Creates a new flight.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

```json
{
  "origin": "string",
  "destination": "string",
  "departureTime": "string (ISO8601 format)",
  "arrivalTime": "string (ISO8601 format)"
}
```

### Get All Flights

**Endpoint:** `GET /flights`

Retrieves a list of all flights.

### Get a Flight by ID

**Endpoint:** `GET /flights/:flightId`

Retrieves a flight's information by its ID.

### Update a Flight

**Endpoint:** `PATCH /flights/:flightId`

Updates a flight's information by its ID.

---

## Airport Routes

### Create an Airport

**Endpoint:** `POST /airports`

Creates a new airport.

**Request Headers:**

- `Content-Type: application/json`

**Request Body:**

```json
{
  "name": "string",
  "city": "string",
  "code": "string"
}
```

---

Please note that this documentation assumes the use of a RESTful API convention.
The routes and endpoints are based on the code provided in the `index.js` file.
Make sure to replace placeholders like `:id` and `:flightId` with actual values when making requests.
Additionally, ensure that you have implemented the required controller functions and middlewares as indicated in the code.
