FROM node:12.18.2 as build
WORKDIR /app
ENV NODE_ENV=development
COPY package*.json ./
RUN  yarn install && yarn cache clean
COPY . /app
ARG BASE_URL
ENV BASE_URL ${BASE_URL:-http://localhost:4000}
RUN BASE_URL=${BASE_URL}
EXPOSE 3000
CMD ["yarn", "start"]


# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
# FROM nginx:stable
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]