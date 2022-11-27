#Stage 1
FROM node:18.6.0 AS build
WORKDIR /app
COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli@14.2.2 && \
    npm install && \
    ng build
COPY . .

# Stage 2
FROM pierrezemb/gostatic
COPY --from=build /app/dist/petstore /srv/http/

