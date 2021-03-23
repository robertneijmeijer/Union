# Union

Welcome, union is a project made by five students. 
We aim to make an exclusive application, like reddit, for users to share a community. 
Down below, you can find the technical setup to this project.

## Docker image
Build whole application:
``docker-compose up``

# Docker

To run docker in dev mode use the command
```docker-compose -f docker-compose-dev.yml up```

To run docker in prod mode
````docker-compose up```

For hot reaload to work on the frontend you need vue.config.js with the following content: 
``
module.exports = {
    configureWebpack: {
      devServer: {
        watchOptions: {
          ignored: /node_modules/,
          poll: 1000
        }
      }
    }
  }
  ``

		