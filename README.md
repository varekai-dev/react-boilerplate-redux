# ERP

## Installation

- `git clone` this repository
- `npm install`
- `.env.development` add variables file for dev environment

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Helps you find and fix problems with your js, ts code.

# Project Structure

```
| src
    | config                         // global configs
    | constants                      // global constants
    | enums                          // global enums
    | hooks                          // global hooks
    | types                          // global types
    | utils                          // global utils
    | styles                         // global styles
    | router

    | components                     // reusable components
        | --> Look Component Structure Section
        | constants                  // reusable components constants
        | enums                      // reusable components enums
        | hooks                      // reusable components hooks
        | types                      // reusable components types
        | utils                      // reusable components utils

    | designSystem                   // colors, typography, components, maybe icons
        | components                 // design-system components
            | --> Look Component Structure Section
        | constants                  // design-system constants
        | enums                      // design-system enums
        | hooks                      // design-system hooks
        | types                      // design-system types
        | utils                      // design-system utils
    | modules
        | --> Look Component Structure Section
```

# Component Structure

```
| ComponentName
    | hooks             // component hooks
    | types             // component types
    | enums             // component enums
    | constants         // component constants
    | utils             // component utils
    | elements          // component elements(components)
    | ComponentName.tsx
    | index.ts
    | styles.ts
    | api.tsx
```
