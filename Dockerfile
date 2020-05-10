
FROM node:lts

#Creates Working App
WORKDIR /usr/src/app
#copy's package.json file and installs deps
COPY package.json ./
RUN npm install
#bundles source
COPY . .
# Port App is Running on
EXPOSE 3000
#starts Project
CMD [ "npm","dev" ]