FROM node 
WORKDIR /usr/src/app
COPY flip-fit-users/package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3002
CMD ["node", "flip-fit-users/dist/main"]