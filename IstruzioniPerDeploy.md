## Istruzioni per deploy Eventual
- Creazioni immagini in locale dell'applicativo frontend e dell'applicativo backend
- docker build  -t usernameDockerHub/react-eventual:latest .
- docker build  -t usernameDockerHub/node-eventual:latest .
- Inizializzare modalità docker swarm con il comando: docker swarm init
- Deploy dell'applicazione: docker stack deploy eventual -c docker-compose.yaml
- Per vedere i servizi attualmente attivi: docker service ls
- Per "spegnere" i container uscire dalla modalità swarm: docker swarm leave --force