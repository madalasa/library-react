#base image
FROM node:9.7.1 AS npmlib

# build the react app for production
RUN mkdir /working
RUN mkdir /imgoutput
WORKDIR /working
ADD . /working

RUN npm install
RUN npm run build

#set up serve to run
#RUN npm install -g serve
#CMD serve -s working/dist
#EXPOSE 5000

#set the application to run on nexus 
 FROM nginx:1.13.9
 COPY --from=npmlib /working/dist /usr/share/nginx/html
 EXPOSE 80
 CMD ["nginx", "-g", "daemon off;"]