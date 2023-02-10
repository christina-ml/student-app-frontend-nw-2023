# 2-8-23
# Lifting state up: preview
## GOALS
1. Fix the bug where we forget a card's expanded state
2. Build Exapnd All / Collapse All buttons

## Steps to reproduce bug

1. Expand Ingaberg's grades
2. Search for `cl`
3. Ingaberg's card is removed from results
4. Delete search term so that Ingaberg is shown in results.

**Expected** Ingaberg's card is still expanded.
**Actual** Ingaberg's card is collapsed.

Notes:
- We are moving the control over the state from inside the cards, to having the state be in the student list.
- The student list will control whether or not we keep the card expanded or not.

Lifting state up:
## Steps to lift state up
1. Move state from child to parent and replace with props
    1a. If child has user interaction, pass handler as props from parent to child
    Examples: 
        - if the child has an input that we type in;
        - if the child has a button that we click
        - if the child has some other thing where user input creates an event that we care about
    WHY: The child had control of updating the state, but we want to update the parent's state instead.
2. Refactor the data type of parent state.
    WHY: The parent might have a different job to do than the child, because it has to control the state of many children; instead of controlling the state of just one child.
3. Refactor how the "state prop" is passed to child.


Question to ask: When lifting state, how do you refactor the data type of the parent state?

Why can't the `expanded` state be a boolean in the StudentList? The `expaned` state needs to keep track of if it's true or false for every individual student card, so Ingaberg and Laurens could be true, but Clarke could be false.
- 2 approaches:
    1. array of ids []
    - if the id is in the array, then we should expand the card for that student.
    Example: ["1", "3"] would expand only Ingaberg and Laurens cards.
    2. Can be done with an object, and may be more efficient, but using an array is more common.

For KEYS: Use the ID for a key, not the indexes from the .map()

# STEPS 2-5-23
show/hide
1. craete the expanded state
2. render the grades only if expanded is true; otherwise do not show
3. toggle the expanded state when the user clicks the button

button
4. use a ternary or conditional to set the text in the <button>
5. the text you render should depend on the expanded state
6. use react icons for the button text

## QUESTIONS

---

# Goals
1. Filter list by input
2. Handleno results situation
3. Input styling and any other styling


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