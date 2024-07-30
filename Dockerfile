FROM node:20

RUN npm run install -g npm
RUN npm install -g typescript@latest &&\
    npm install -g @angular/cli@13

COPY entrypoint.sh /entrypoint.sh

WORKDIR /app

ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["ng", "serve", "--host", "0.0.0.0"]