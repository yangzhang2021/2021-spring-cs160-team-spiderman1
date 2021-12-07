FROM node:12.4.0-alpine as frontend
ENV NODE_ENV=production
WORKDIR /frontend
COPY /src/main/java/teamspiderman/frontend .
RUN npm ci
RUN npm run-script build
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN chown -R node /frontend
USER node
CMD ["npm", "start"]
FROM maven:3.6.3-jdk-11 as backend
WORKDIR /backend
COPY . .
RUN mkdir -p src/main/resources/static
COPY --from=frontend /frontend/build src/main/resources/static
RUN mvn clean verify
FROM openjdk:14-jdk-alpine
COPY --from=backend /out/demo.jar ./app.jar
EXPOSE 8080
RUN adduser -D user
USER user
CMD [ "sh", "-c", "java -Dserver.port=$PORT -Djava.security.egd=file:/dev/./urandom -jar app.jar" ]