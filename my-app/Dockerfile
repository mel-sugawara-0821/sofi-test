# ベースイメージ
FROM node:25-alpine

# 作業ディレクトリを設定
WORKDIR /app

ARG MICROCMS_SERVICE_DOMAIN=php
ARG MICROCMS_API_KEY=php


# 依存関係をコピーしてインストール
COPY package.json package-lock.json ./
RUN npm install

# ソースコードをコピー
COPY . .

RUN echo "$MICROCMS_SERVICE_DOMAIN"

# アプリケーションをビルド
RUN npm run build


# ポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
