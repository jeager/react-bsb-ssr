This project was bootstrapped with CRA with the addition of express, so we can have a server to render our APP.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run server`

This will run our server in port 3000. It will also set `NODE_ENV` to development and `BABEL_ENV` to development.

## How to use

There are 2 routes for this app: `'/'` and `'/state'` 

The first one will render out APP without any previous state. The second one will init our app with an initial state.