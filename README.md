# First docker image

Dockerize a simple node application, following the tutorial from Fireship.io https://www.youtube.com/watch?v=gAkwW2tuIqE&t

## Building
To create the docker image, use the `docker build -t <docker hub username>/<image name>:<image version>` command. **-t** signifies that the image has to be created under a certain tag

## Running
To run the docker container, use the `docker run -p 5000:5123 <image tag>` OR `docker run -p 5000:5123 <image ID>`. **-d** signifies that the container will be running in *detached* mode, meaning it will detach from the terminal. The container run this way can be killed using *Docker Desktop* or using the Docker CLI. **5000:5123** signifies that the port **5123** of the container is forwarded to port **5000**, meaning if the server is running on port **5123**, it will have to be accessed using the URL **localhost:5000**.

# Docker compose

Using the *dockercompose.yml* file we specify the services and volumes we need to containerize.

## Warning!
If you change any of the sources file specified in the **Dockerfile**, you will have to rebuild it using `docker compose up --build`

## db service
Here we describe what our database should be. We use the **postrgres:16.0** image, forward the port **5432** to **5432** and add environment variables for database connection. Here we also add the **PGDATA** variable, which tells Docker that the data should be stored in the */var/lib/postgresql/data/pgdata* directory, which allows db data to be persistent between launches. In **volumes** we add the volume **db-data**, and we also point the current directory to the *docker-entrypoint-initdb.d* file. This will allow Docker to look for *.sql* files in the specified directory and, if the db is not initiated, initiate it using those files.

## app service
We export the environment variable **PGHOST** to be **db** (otherwise it will look for in in **localhost**). We specify the build directory, which contains the *Dockerfile* file and that the port **5123** is to be forwarded to port **5123**. We need to ensure that **app** will be running only after the **db** service is operational, so we add **db** the **links** and **depends_on** properties.
