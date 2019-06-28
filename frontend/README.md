This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Goals:

Create forms that serve as some sort of 'dynamic integration test' tool, that tests flows end to end. Easily configure forms to post variations of data to the adyen api

### getPayments form:

form with 3 fields: 
* Currency
* Country code
* Amount

A table with presets that populates the form values

a field displaying the adyen response, and an expected response


### Payments form:

* Use drop-in components
* Use iDEAL form
* Use variations of credit card
* Use custom