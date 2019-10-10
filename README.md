Hello,

Thank you for visiting. 

This is an ecommerce demo consuming the moonpig API, using the latest best practices and built in React <3
Please follow the instructions below to get started and take note of the caveats and "to-do"/improvement list if I had more time. 

## Available Scripts

First, clone the repo then run `npm install` to install dependencies.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Important note:

I had CORS issues when using Chrome/Safari so to get around this, I disabled CORS checks in Chome and on safari e.g. `open -a Google\ Chrome --args --disable-web-security --user-data-dir`. 

### To-dos

* I attempted this with a TDD approach however, I'm fairly new to TDD and came across one stubborn issue where I couldn't get the test to work. So, I commented it out- if I had more time on it, I would explore how to fix it properly. I'm making assertions on the component HTML output as I struggled to target the specific elements that I wanted. 

* Adding an API wrapper: The main benefit would have been to consolidate all the API calls to one place where I could define various API endpoints. 

* I would have liked to use more of the product objects to drive more functionality for example, a dropdown for card sizes which would alter price. 

### Resource
*https://webaim.org/resources/contrastchecker/

*https://airbnb.io/enzyme/docs/api/ShallowWrapper/text.html

*https://itnext.io/writing-customizable-styled-react-components-51d38ed20461

*https://jestjs.io/docs/en/mock-functions.html

*https://www.leighhalliday.com/testing-asynchronous-components-mocks-jest

*https://dev.to/bdbch/react-hooks-for-data-part-1-fetching-data-28ge

*https://devhints.io/enzyme

*https://www.robinwieruch.de/react-hooks-fetch-data


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
