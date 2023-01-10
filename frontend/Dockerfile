#docker build  -t foscofra/react-eventual:latest .
FROM node:latest

WORKDIR $HOME/react-frontend
COPY . .

#COPY package.json .
#RUN npm install

#COPY . .

#RUN npm run build
ENV EVENTUAL_REACT_PORT 3000
EXPOSE 3000

RUN npm install
CMD ["npm", "start"]