# frontend

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

## Docker image
Build frontend:
``docker build -t union-vue .``

Run frontend:
``docker run -it -p 8080:8080 --rm --name vue union-vue``

## Testing
For testing jest is used, to make sure jest is working add the following to package.json
```
"jest": {
    "moduleFileExtensions": [
      "js",
      "ts",
      "json",
      "vue"
    ],
    "transform": {
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.tsx?$": "ts-jest"
    },
    "testURL": "http://localhost/",
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
  }
```
