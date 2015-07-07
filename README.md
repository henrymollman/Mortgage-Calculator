# Mortgage-Calculator

##Overview

A Backbone.js front-end with mutliple views, allowing users to enter an annual income, a maximum possible monthly payment, down payment and monthly debts, and receive potential mortgage information using the Zillow API. The backend portion of the server was built using Node.js, which also calls the Zillow API after receiving a request from the client and returning information retrieved from Zillow based on user-provided parameters. A standard 30-year payment schedule for the mortgage is also provided.

The views are separated into an App View, Form View, Schedule View and Table View. One model and one controller are used. Bootstrap and some custom CSS are used to style the views. 


##Deployment

The server is hosted using Heroku, and is available at credibleapp.herokuapp.com. To deploy the application, clone the repo and sign up for a Zillow user account for an api key. The api key must use the name “zillow”.
