FROM node:20

LABEL maintainer="front"

# Update npm to the latest version
RUN npm install -g npm

# Install global packages
RUN npm install -g typescript@latest \
    @angular/cli@13

COPY entrypoint.sh /entrypoint.sh

WORKDIR /app

ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["ng", "serve", "--host", "0.0.0.0"]
