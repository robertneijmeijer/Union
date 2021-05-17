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
eslint . --fix
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker image

Build frontend:
`docker build -t union-vue .`

Run frontend:
`docker run -it -p 8080:8080 --rm --name vue union-vue`
