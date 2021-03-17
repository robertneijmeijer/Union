# Union

Welcome, union is a project made by five students. 
We aim to make an exclusive application, like reddit, for users to share a community. 
Down below, you can find the technical setup to this project.

## Docker image
Build whole application:
``docker-compose up``

Run command:
``docker run -it -p 8080:8080 --rm --name vue union-vue``

# Docker

To run docker in dev mode use the command
```docker-compose -f docker-compose-dev.yml up```

To run docker in prod mode
````docker-compose up```

