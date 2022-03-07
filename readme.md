
## Expo 44 react-native-web boiletplate


### This boilerplate includes:
- Expo 44
- React navigation ( stack / drawer / bottom tabs )
- React reanimated v2 ( 2.4.1! ) 

- Animatable for animations
- Poppins fonts
- Vector-icons
- Axios to make API calls
- Redux for state
- Formik + yup for forms and validation
- React-native-svg for displaying svg's
- React-native-svg-charts for displaying data ( pie ) charts / circles
- React-native-calendar-picker for a calendar component
- Babel module resolver for resolving imports;
    ```import { Component } from '../../components'```
    becomes
    ```import { Component } from 'components/Component'```


## File directory layout

|- Src
    |- Assets: Location for all static files.
    |- Componenten
    |- Hooks     
    |- Navigation
    |- Pages
    |- Providers
    |- Screens
    |- Store
        |- actions
        |- constants
        |- reducers
    |- Styles
    |- Utils
    |- index.tsx
|- Web
    |- index.html
    |- webstyles.css

  

It's not recommended to change the entrypoint index.js ( in package.json for example ).
  
Use hooks
Use index.js ( ```export { TextComponent } from './TextComponent'``` )
  
  

### Install

```npm install  /  yarn install```
```npm start  /  yarn start```


### Build
```eas build```
