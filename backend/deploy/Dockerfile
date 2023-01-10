FROM node:latest
COPY ./ $HOME/node-backend
WORKDIR $HOME/node-backend
ENV EVENTUAL_PORT 80
ENV MONGO_USER admin
ENV MONGO_PASSWORD admin
ENV MONGO_PORT 27017
#RUN npm install -g npm@latest  #tre comandi per evitare problemi con npm
#RUN npm cache clean --force
#RUN npm rm -rf node_modules && rm package-lock.json
RUN npm init
RUN npm install
RUN npm install express
CMD npm start
