# DEPLOY BACKEND

Passaggi eseguiti:
1. Creazione del Dockerfile per l'immagine Nodejs: per creare solo lei: `docker build . -t foscofra/nodejs`
2. Impostazione del file `docker-compose.yaml`
   1. Definizione delle variabili di env di `mongo`
      1. Nome utente (`MONGO_INITDB_ROOT_USERNAME`): `admin`
      2. Password (`MONGO_INITDB_ROOT_PASSWORD`): `admin`
      3. Impostazione del mapping della porta di connessione
   2. Definizione delle variabili di env di `mongo-dashboard`
      1. Nome utente istanza mongo (`ME_CONFIG_MONGODB_ADMINUSERNAME`): `admin`
      2. Password istanza mongo (`ME_CONFIG_MONGODB_ADMINPASSWORD`): `admin`
      3. Non è necessario impostare la porta di mongo perché la `27017` è quella di default
      4. Stringa connessione istanza mongo (`ME_CONFIG_MONGODB_URL`): `mongodb://${ME_CONFIG_MONGODB_ADMINUSERNAME}:${ME_CONFIG_MONGODB_ADMINPASSWORD}@${ME_CONFIG_MONGODB_SERVER}:${ME_CONFIG_MONGODB_PORT}/`
   3. Aggiunta del servizio `hc-frontend (NodeJS)`
      1. Impostazione della dipendenze a `mongo`
      2. Aggiunta dei parametri di connessione al db
         1. `MONGO_USER`: `admin`
         2. `MONGO_PASSWORD`: `admin`
         3. `MONGO_HOST`: `mongo`
         4. Non è necessario impostare la porta di mongo perché la `27017` è quella di default però gliel'abbiamo messo lo stesso
      3. Configurazione del numero di repliche a 3
      4. Impostazione del mapping della porta da `80` a `8080`
3. Inizializzare Swarm:
   `docker swarm init`
   Con docker swarm diventa possibile utilizzare due funzionalità in piu: i servizi e gli stack
   `docker stack --help`
   Quello che abbiamo scritto nel file docker-compose diventa uno stack
4. Deploy dello stack:
   `docker stack deploy eventual-backend -c docker-compose.yaml`
   `docker stack ls`
   lo stack è composto da un solo servizio: `docker service ls` -> vediamo che il servizio è replicato 3 volte
   Docker Swarm ci da in più il load balancing gratuito per iservizi replicati: tutte le repliche sono quindi accessibili sulla porta 8080 grazie al load balancing.
5. Controllo dei log dei vari servizi:  
   `docker service logs -f NOME_SERVIZIO`
6. Test di connessione al db con `mongo-express` (https://localhost:8081/)
7. Test del servizio su https://localhost:8080/
8. Esecuzione del file di test `../poll-localhost.sh 8080`

## Output parziale di `poll-localhost.sh`
```
[227fb2ea6448c7eb@7caca16f3bf5:80] Hit 61 times
[ab4f5c18a8b50a19@ec18d04f2932:80] Hit 62 times
[660162ee3a072af4@6c06b4d75a64:80] Hit 63 times
[b295b1ea7d527a36@1bb83485104f:80] Hit 64 times
[ea34935707f83412@cabc7ea2da40:80] Hit 65 times
[d55552405fc34650@930b53369e98:80] Hit 66 times
[495a874a639ee80d@fb98bda3953f:80] Hit 67 times
[3295913b2dffa8b7@61b081dddf2e:80] Hit 68 times
[3be838b853349bc6@090b5666fc5c:80] Hit 69 times
[9fcbe33c610fa45b@cbc131700e1f:80] Hit 70 times
[227fb2ea6448c7eb@7caca16f3bf5:80] Hit 71 times
[ab4f5c18a8b50a19@ec18d04f2932:80] Hit 72 times
[660162ee3a072af4@6c06b4d75a64:80] Hit 73 times
[b295b1ea7d527a36@1bb83485104f:80] Hit 74 times
[ea34935707f83412@cabc7ea2da40:80] Hit 75 times
[d55552405fc34650@930b53369e98:80] Hit 76 times
[495a874a639ee80d@fb98bda3953f:80] Hit 77 times
[3295913b2dffa8b7@61b081dddf2e:80] Hit 78 times
[3be838b853349bc6@090b5666fc5c:80] Hit 79 times
[9fcbe33c610fa45b@cbc131700e1f:80] Hit 80 times
[227fb2ea6448c7eb@7caca16f3bf5:80] Hit 81 times
[ab4f5c18a8b50a19@ec18d04f2932:80] Hit 82 times
[660162ee3a072af4@6c06b4d75a64:80] Hit 83 times
[b295b1ea7d527a36@1bb83485104f:80] Hit 84 times
[ea34935707f83412@cabc7ea2da40:80] Hit 85 times
[d55552405fc34650@930b53369e98:80] Hit 86 times
[495a874a639ee80d@fb98bda3953f:80] Hit 87 times
[3295913b2dffa8b7@61b081dddf2e:80] Hit 88 times
[3be838b853349bc6@090b5666fc5c:80] Hit 89 times
[9fcbe33c610fa45b@cbc131700e1f:80] Hit 90 times
[227fb2ea6448c7eb@7caca16f3bf5:80] Hit 91 times
[ab4f5c18a8b50a19@ec18d04f2932:80] Hit 92 times
[660162ee3a072af4@6c06b4d75a64:80] Hit 93 times
[b295b1ea7d527a36@1bb83485104f:80] Hit 94 times
[ea34935707f83412@cabc7ea2da40:80] Hit 95 times
[d55552405fc34650@930b53369e98:80] Hit 96 times
[495a874a639ee80d@fb98bda3953f:80] Hit 97 times
[3295913b2dffa8b7@61b081dddf2e:80] Hit 98 times
[3be838b853349bc6@090b5666fc5c:80] Hit 99 times
[9fcbe33c610fa45b@cbc131700e1f:80] Hit 100 times
[227fb2ea6448c7eb@7caca16f3bf5:80] Hit 101 times
```
