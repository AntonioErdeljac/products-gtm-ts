# products-gtm-ts

Product conversion page built using React + Typescript. Conversion tracked with GTM, Sources with Mixpanel.

### CI / CD

![Vercel](https://vercelbadge.vercel.app/api/antonioerdeljac/products-gtm-ts)

[Live version](https://products-gtm-ts.vercel.app/)

### Lint

[![eslint: airbnb](https://img.shields.io/badge/Eslint-Airbnb-red?logo=airbnb&style=flat)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/Code%20Style-Prettier-red?logo=prettier&style=flat)](https://github.com/prettier/prettier)

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/products-gtm-ts.git
```

### Install packages

```shell
npm i
```

### Start the app

```shell
npm start
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `start`         | Starts a development instance of the app |
| `build`         | Creates a production bundle              |
| `preview`       | Preview build bundle                     |

## Analytics

| event_name                   | description                                       |
| ---------------------------- | --------------------------------------------------|
| `product_selection`          | Tracks product selection (Google Analytics)       |
| `utm_ parameters`            | Tracks last touch UTM parameters (Mixpanel)       |