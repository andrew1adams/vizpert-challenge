## Folder Structure ~ Code mapping of most relevant files, by Andrew Adams.

<br/>

```js
vizpert-challenge

  ├── public //public files
  └── src
      ├── assets // general assets of project
      └── components
          ├── Board // stores board logic
          ├── Book // stores book logic
          ├── Bookcase // stores bookcase logic
          ├── Button // stores button logic
          ├── Clock // stores clock logic
          ├── Main // centralizes all components
          ├── Shelf // stores shelf logic
          └── index.ts // centralize all component imports
      ├── constants // stores all constants values of project
      ├── context // stores all contexts
      ├── helpers // auxiliar functions
      ├── hooks // custom hooks
      ├── interfaces // stores all interfaces of projects
      └── styles // stores global styles
```

<br/>

## **Feedback**

#### **Alpha**:

- Sort: `['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']`
- Reverse: `['I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']`

#### **Color**:

- Sort: `['B', 'C', 'A', 'I', 'E', 'H', 'D','G', 'F']`
- Reverse: `['F', 'G', 'D', 'H', 'E', 'I', 'A', 'C', 'H']`

#### **Size**:

- Sort: `['E', 'G', 'F', 'H', 'I', 'A', 'H', 'C', 'D']`
- Reverse: `['D', 'C', 'H', 'A', 'I', 'B', 'F', 'G', 'E']`

### **Date**:

- Sort: `['F', 'E', 'D', 'I', 'G', 'B', 'A', 'C', 'H']`
- Reverse: `['H', 'C', 'A', 'B', 'G', 'I', 'D', 'E', 'F']`

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
