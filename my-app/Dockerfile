# ベースイメージ
FROM node:25-alpine

# 作業ディレクトリを設定
WORKDIR /app

ARG MICROCMS_SERVICE_DOMAIN=ERVICE_DOMAIN
ARG MICROCMS_API_KEY=API_KEY

# 依存関係をコピーしてインストール
COPY package.json package-lock.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# ポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]