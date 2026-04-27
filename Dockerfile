FROM mcr.microsoft.com/playwright:v1.59.1-jammy

WORKDIR /app

RUN apt-get update && \
    apt-get install -y default-jre

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "playwright", "test"]
