## Istruzioni per deploy Eventual 

- Per sicurezza, come prima cosa installiamo le dipendenze del progetto
- Andare nella cartella "frontend" e lanciare il comando npm install per installare tutte le dipendenze dall'applicativo frontend
- Andare nella cartella "backend" e lanciare il comando npm install per installare tutte le dipendenze dall'applicativo backend
- Creazioni immagini in locale dell'applicativo frontend e dell'applicativo backend
- docker build  -t usernameDockerHub/react-eventual:latest .
- docker build  -t usernameDockerHub/node-eventual:latest .

A questo punto è possibile eseguire l'applicazione in due modi:

### Docker compose classico
- docker-compose up
- Per stoppare andare su Docker-Dashboard e stoppare i container

### Docker in modalità swarm
- decommentare nel file docker-compose.yaml nel service eventual-backend i parametri di deploy (deploy, mode e replicas)
- Inizializzare modalità docker swarm con il comando: docker swarm init
- Deploy dell'applicazione: docker stack deploy eventual -c docker-compose.yaml
- A causa delle repliche e della pensantezza dell'applicazione, essendo tutto in locale, l'avvio dell'applicativo potrebbe richiedere un po di tempo. Sopratutto bisognerà aspettare un attimo che il container di MongoDb si attivi.
- Per questo motivo abbiamo notato che la prima volta che si lancia l'applicativo è consigliabile avviare in modalità "Docker compose classico" in modo che venga costruita l'infrastrutta di rete sottostante.
- Dalla secondo avvio in poi si potrà eseguire l'applicativo in modalità swarm agilmente.
- Per vedere i servizi attualmente attivi: docker service ls
- Per "spegnere" i container uscire dalla modalità swarm: docker swarm leave --force

### Popolare il database
- Andare nella cartella backend e eseguire il comando per eseguire lo script javascript seed.js: npm run seed 
- In questo modo il db sarà popolato con alcuni dati di partenza

### Test connessione app backend
- E' possibile eeguire lo script bash "poll-localhost.sh" per testare la connessione all'app backend
- se sarà restituita la stringa "ciaooooo" allora la connessione all'app backend è andata a buon fine