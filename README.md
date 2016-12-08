COFFEE SERVER

This API returns coffee machine and coffee pod products in a JSON format.

The server was built in Node/Express with a SQLite3 database.

See below for API documentation.

* GET /machines - get all coffee machine products

* GET /machines/:sku - get one coffee machine by SKU

* GET /machines/type/:type - get all machines of a type ['base', 'premium', 'deluxe']. Will also return a list of smallest pack size compatible with the machine for cross-sell opportunity

* GET /machines/size/:size' - get all machines of a size ['small', 'large, 'espresso']

* GET /pods - get all coffee pod products

* GET /pods/:sku - get a pod product by SKU

* GET /pods/flavor/:flavor - get pods filtered by flavor (will only return smallest pack size (12 for small/large pods and 36 for espresso size pods) as cross-sell info for a landing page.

* GET /pods/size/:size - get pods filtered by size [12, 36, 60, 84]

* GET '/pods/type/:type' - get pods filtered by the type of machine they're compatible with ['small', 'large', 'espresso'] 

This repository available at https://github.com/dengjonathan/coffee-api

To run on your local machine use the following commands:
`git clone https://github.com/dengjonathan/coffee-api`
`npm install`
`npm run test` *make sure all tests pass before running server*
`npm run start`

Any questions please contact Jon @ dengjonthan [at] gmail.com