# firebase-chat2

Example from https://medium.com/@andrewhartnett/building-a-chat-app-with-vuejs-firebase-1dd2d53be52e, requires Firebase config and 'Realtime' database set to 

```
{
   "rules": {
       ".read": true,
       ".write": true
     }
 }
```
. Firebase enables the Cloud Firestore by default so this step is confusing to users following the tutorial. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
