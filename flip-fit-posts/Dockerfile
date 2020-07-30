FROM node 
WORKDIR /usr/src/app
COPY flip-fit-posts/package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "flip-fit-posts/dist/main"]