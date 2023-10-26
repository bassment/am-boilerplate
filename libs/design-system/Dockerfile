FROM --platform=linux/amd64 nginx:alpine

WORKDIR /app

COPY dist/storybook/design-system .

COPY libs/design-system/nginx/nginx.conf /etc/nginx/nginx.conf