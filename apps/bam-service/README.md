## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Nodejs

### Installing

A step by step series of examples that tell you have to get a development env running

```
git clone <repository>
```

```
cd <repository>
```

```
npm i -g node-red
npm install
```

## Obtain a bot

1. Go to the [telegram bot](https://t.me/GotFatherBot)
2. Type `/start`
3. Type `/newbot`
4. Follow the instructions.

User token as `<bot_token>` and bot name as `<bot_name>`

## Obtain a openai token

1. Go to the [openai](https://beta.openai.com/)
2. Sign up
3. Go to the [api keys](https://beta.openai.com/account/api-keys)
4. Copy the secret key

## Run ngrok

```
ngrok http 1880
```

copy the https url and use it as `<webhook_url>`

### Genarate a password

```
node-red admin hash-pw
```

1. Type your password
2. Encode genearted hash `echo <hash> | base64`
3. Use the encoded hash as `<admin_password>`

## Convert admin_password to base64

```
    node -e "console.log(Buffer.from(process.argv[1]).toString('base64'))" <admin_password>
```

Use the encoded hash as `<admin_password>`

## Run you bot locally

Copy .env.example to .env and fill the variables

```
node-red -u .
```

## Built With

- [Node-Red](http://nodered.org/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
