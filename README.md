
## Steps for laravel/reactjs setup  

#### git clone https://github.com/jackjk521/thesisiot
#### mv .env.example .env 
#### composer install
#### php artisan key:generate
#### php artisan ui react
#### npm install
#### npm run watch


## To run the application
#### Open 3 split terminal:
#### nodemon resources\js\server.js  
#### npm run watch
#### php artisan serve


## Files to look at:

## devStateRoutes.js under resources/js/routes
#### it is where routes go through and aviondb methods for document manipulation
## server.js under the root folder
#### dbInit() for avionDB and port listening
## SignIn.js under resources/js/components
#### sample of passing data from a form to route then to aviondb


## Concept:
#### Start from:
#### server.js -> to initialize the avionDB with the StatesDev collection 
#### SignIn.js -> data is sent via axios -> deviceStateRoutes.js where it gets added or updated in tha aviondb collection

# Notes:
#### Couldn't install aviondb due to variou errors - install aviondb
composer fixes:
update/install --ignore-platform-reqs 