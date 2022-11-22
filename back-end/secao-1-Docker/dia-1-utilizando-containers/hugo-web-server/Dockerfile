# Primeiro Estágio
FROM alpine:3.14 AS primeiro-estagio
WORKDIR /site

COPY ./src/config.toml config.toml
COPY ./src/index.html /site/layouts/index.html
COPY ./src/_index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21-alpine AS segundo-estagio

COPY --from=primeiro-estagio /site/public /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]

