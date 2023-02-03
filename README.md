## Membri del gruppo:
- Francesco Foschini (matricola 0001033912)
- Alessia Rocco (matricola 0000983123)

 

## Descrizione del progetto:
Eventual è un servizio web per la gestione di eventi, simil TicketOne. Ci si può registrare al sito come organizzatore o come utente che vuole partecipare ad un evento.

### Funzionalità relative all’utente non organizzatore:
- Signup e login;
- Visione del calendario/elenco degli eventi;
- Visione degli eventi a cui partecipa;
- Possibilità di acquistare un biglietto per un evento;
- Gestione del proprio profilo;

### Funzionalità dell’organizzatore
- Signup e login;
- Visualizzazione calendario/elenco degli eventi;
- Visione degli eventi a cui partecipa;
- Possibilità di acquistare un biglietto per un evento;
- Creazione/modifica/rimozione degli eventi;

### Funzionalità utente admin
- Login;
- Visione del calendario/elenco degli eventi;
- Visione degli eventi a cui partecipa;
- Visione degli eventi che ha organizzato;
- Creazione/modifica/rimozione di un qualsiasi evento;
- Gestione e rimozione di un qualsiasi utente non admin;

### Tecnologie utilizzate:
L’applicazione verrà sviluppata utilizzando lo stack MERN: sarà quindi utilizzato React per lo sviluppo dell'applicativo di frontend e bootstrap e SCSS per la grafica. Per il deploy dell'applicazione si sfrutterà il supporto docker.
Eventuali altre tecnologie e funzionalità che in fase d’opera verranno ritenute necessarie saranno inserite nella relazione finale.

---

## Prerequisiti 
Per utilizzare correttamente l'applicazione occorre:
- Docker Desktop: https://www.docker.com/
- Nodejs: https://nodejs.org/en/download/

---

## Istruzioni per deploy Eventual
- Importare le immagini in locale di mongo e mongo-express
- docker pull mongo
- docker pull mongo-express
- Creazioni immagini in locale dell'applicativo frontend e dell'applicativo backend
- docker build  -t usernameDockerHub/react-eventual:latest .
- docker build  -t usernameDockerHub/node-eventual:latest .
- Inizializzare modalità docker swarm con il comando: docker swarm init
- Deploy dell'applicazione: docker stack deploy eventual -c docker-compose.yaml
- Per vedere i servizi attualmente attivi e su quali porte: docker service ls
- Per popolare il db andare nella cartella del progetto backend e eseguire il comando: npm run seed
- Per "spegnere" i container uscire dalla modalità swarm: docker swarm leave --force