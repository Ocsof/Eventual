## Comandi creazione e esecuzione immagine/container in locale utilizzando il dockerfile
- docker build  -t usernameDockerHub/node-eventual:latest .
- docker run -p 8082:8080 usernameDockerHub/node-eventual

Once the service is running, you may query it by either:
- browsing to http://localhost:8080 in your browser
- run `curl http://localhost:8082`
- run the `poll-localhost.sh` script as follows:
    ```bash
    ../poll-localhost.sh

MongoDB instances can be started up with Docker, via ad-hoc images:
- [`mongodb`](https://hub.docker.com/_/mongo) the actual No-SQL DBMS
- [`mongo-express`](https://hub.docker.com/_/mongo-express) a Web-based dashboard for MongoDB instances

> Once completed, the provided `docker-compose.yaml` file should be able to start a MongoDB instance via either Docker Compose or Swarm 
