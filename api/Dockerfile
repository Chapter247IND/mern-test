FROM node:17
WORKDIR /usr/src/server

COPY ./ ./
COPY package*.json ./
RUN npm install

EXPOSE 8000
ENV NODE_ENV=production
ENV DB_URI=mongodb://localhost:27017/test_assessment
ENV JWT_SECRET=qwerty@5678
ENV PORT=8000
ENV API_URL=http://localhost:8000

CMD [ "npm", "start" ]