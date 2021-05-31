# Union

Welcome, union is a project made by five students. 
We aim to make an exclusive application, like reddit, for users to share a community. 
Down below, you can find the technical setup to this project.

## Docker image
Build whole application:
``docker-compose up``

# Docker

### Development

To run docker in dev mode use the command
```docker-compose -f docker-compose-dev.yml up```

You can connect to the database with the same settings as would do locally (check docker-compose-dev.yml for the details). 
Make sure that the postgresql instance is stopped on your local machine -> the docker container can't map its ports otherwise.

#### Migrations
It may happen that you need to run migrations on your backend. Normally you would do that by going to your terminal and executing the command. You first have to enter the docker container by executing the following command. Or by opening the docker, going to the container, and pressing the cli/terminal button.

```
docker exec -it backend /bin/bash
```

You are now in the terminal of your backend container. Now you can run the `python manage.py migrate` command and any other command you might want to run on the backend.

### Production

To run docker in prod mode
``docker-compose up``

For hot reload to work on the frontend you need vue.config.js with the following content: 
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

		
