# SASS/ SCSS
for some reason this does not work (in SCSS documentation):
```
npm install -g sass
```
but this works (below):
```
npm i sass --save-dev
```

# TODOs

# QUESTIONS

# THINGS TO DISCUSS
What causes a React component to rerender?
- The component's parent renders again
- The component's props change
- The component's state changes

## Create React App
```
npx create-react-app student-app-frontend-nw-2023
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## QUESTIONS
Using fetch with async and await?
What goes into dependency array?

## TypeScript
Why is TypeScript considered a stronger typing system vs JavaScript?
"TS is a superset of JS"
Other stuff in TS == defining the types of your variables, arguments, and return types, and component props
Typescript has to be compiled into JavaScript

TS => JS => JS that browsers understand => bundle into a single JS file

Adding TypeScript to React: [https://create-react-app.dev/docs/adding-typescript/](https://create-react-app.dev/docs/adding-typescript/)

## Container.js
/**
 * memory
 *             myString     
 *                |
 * -- -- -- -- "hello"
 * 
 * let myString = "hello"
 * myString = "bye"
 * 
 *                     myString   myArr   
 *                          |      |
 * -- -- -- -- "hello" -- "bye" ['hello']
 * 
 * const myArr = []
 * myArr.push("hello") // OK
 * myArr = ["yo", "bye", "pizza"] // ERROR
 */


/**
 * difference between 'Container__center' and 'Container--center'?
 * both are totally fine
 * CSS convention called Block Element Modifier (BEM)
 * 
 * StudentCard__avatar  (left side of the card)
 * StudentCard__info    (right side of the card)
 * StudentCard__avatar--center      (`center` is a modifier)
 * StudentCard__avatar--active      (`active` is a modifier)
 * 
 * block__element--modifier
 * block--modifier
 */


// How it would look in TYPESCRIPT:
// type ContainerProps {
//     center: Boolean
//     children: React.Children
// }

// const Container = 