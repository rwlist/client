FROM node:latest AS react-build

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# set api entrypoint
ENV REACT_APP_ENTRYPOINT http://api.rwlist.io

# install and cache app dependencies
COPY *.json /usr/src/app/
RUN npm ci
COPY . .
RUN npm run build --production

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]