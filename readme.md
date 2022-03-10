
## Expo 44 react-native-web boiletplate


### This boilerplate includes:
- Expo 44
- React navigation ( stack / drawer / bottom tabs )
- React reanimated v2 ( 2.4.1! )
- 
- Animatable for animations
- Poppins fonts
- Vector-icons
- Axios to make API calls
- Redux for state
- Formik + yup for forms and validation
- rn-responsive-styling for.. responsive styling with break points ( with useStyle hook )
- React-native-svg for displaying svg's
- React-native-svg-charts for displaying data ( pie ) charts / circles
- React-native-calendar-picker for a calendar component
- Babel module resolver for resolving imports:<br>
    ```import { TextComponent } from '../../components'```<br>
    becomes<br>
    ```import { TextComponent } from 'components'```


## File directory layout
```
|- Src
    |- Assets
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
```
  
<br>
It's not recommended to change the entrypoint index.js ( in package.json for example ) as it will break the building process.
  
Use hooks<br>
Use index files to export ( ```export { TextComponent } from './TextComponent'``` )
  
  

### Install
```npm install  /  yarn install```  

### Run
```npm start  /  yarn start```

### Build
```eas build``` add ```--profile preview``` for an apk
