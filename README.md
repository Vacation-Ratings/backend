# Vacations Ratings Back End

Deployment URL:

![Vacation Ratings](./VacationRatings-slim.jpg)

## Installation

to install run `git clone git@github.com:Vacation-Ratings/backend.git`

run `npm install`

## Usage

To start server run: `npm start`

To test server run: `npm test`

## Routes

This application is using MongoDB for storage of the location information and Firebase for image storage.

The `.env` file should have the following in it:

* MONGODB_URI: html link to your MongoDB.
* PORT: What port your using for testing. This will typically be overwritten by your hosting platform.

## Features

* Stored location data from each review:
  * Location: The blogged city's name.
  * Country: The country the city is in.
  * Description: Where all the details of the trip are shared.
  * Duration: How long the user was in the city.
  * Rating: How many stars the user would rate their experience between zero and five stars.
  * Expences: How much this trip cost
  * Username: The name of the user. This is retreived from the Auth0 log in.
  * ImageUrl: A image that encompasses the trip as a whole.
  * Timestamp: When the review was submitted and stored in the server.

* Recent trip carousel:
  * A revolving pictures from recent trips that were posted.

* Auth0:
  * Made logging in easy without having to create a new account.

## Created by

* **Keian Anthony:** https://github.com/Keian-A
* **Scott Lease:** https://github.com/scottie-l
* **Jacob Choi:** https://github.com/Choij12
* **Micheal Metcalf:** https://github.com/Metty82
