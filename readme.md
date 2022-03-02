
## Expo 44 react-native-web boiletplate


### This boilerplate includes:
- Expo 44
- React navigation ( stack / drawer )
- React reanimated v2 ( 2.4.1! )
---
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
  
  ```import Component from '../../components/Component'```  
  becomes  
  ```import Component from 'components/Component'```
<br/>

## File directory layout
```
|- Assets: Location for all static files.
|- Src
    |- Componenten
    |- Hooks     
    |- Navigation
    |- Pages
    |- Screens
    |- Store
        |- actions 
        |- constants
        |- reducers            
    |- Styles
    |- index.tsx
|- Web
    |- index.html
    |- webstyles.css
```

### Install
```npm install  /  yarn install```  

### Run
```npm start  /  yarn start```

### Build
```eas build```

!!! It's not recommended to change the entrypoint index.js ( in package.json for example ). This may break build !!!
