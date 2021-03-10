# Setup

1. [Install python](https://www.python.org/downloads/)
2. Run the command: python -m pip install Django

## Install packages

```
pip install -r ./requirements.txt
```

## Setup Environment Variables

Windows

- Rename `.env.sample` to `.env`

Linux/Mac

```
cp project/.env.sample project/.env
```

After this fill in the values for your database instance

## Run Migrations

### Migrate to a newer version
```
python manage.py makemigrations
```

### Set migration files to the database
```
python manage.py migrate
```

### Sync database with 
Only needed when it doesn't create all tables directly
```
python manage.py migrate --run-syncdb
```
This will create tables and columns on your database. More info on migrations
here (https://docs.djangoproject.com/en/3.1/topics/migrations/)

# Running the project

On the project root folder, run the command:

```
python manage.py runserver
```