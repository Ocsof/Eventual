#comando: docker build  -t foscofra/node-eventual:latest .
FROM node:latest
WORKDIR $HOME/node-backend
COPY . .
ENV MONGO_USER admin
ENV MONGO_PASSWORD admin
ENV MONGO_PORT 27017
#porta esposta dal container
ENV EVENTUAL_NODE_PORT 8080
EXPOSE 8080
#RUN npm install -g npm@latest  #tre comandi per evitare problemi con npm
#RUN npm cache clean --force
#RUN npm rm -rf node_modules && rm package-lock.json
#RUN npm init
RUN npm install
RUN npm install express
CMD npm start
