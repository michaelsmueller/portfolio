# Web dev & finance portfolio

A showcase of some of my web development and finance projects.

The sites was created using the [Prist](https://prist.marguerite.io/) starter theme powered by [Gatsby v2](https://www.gatsbyjs.org) and [Prismic](https://prismic.io/).

Hook up to your Pismic database (configured in prismic-config.js). Refer to the Prist documentation for more configuration information.

## Installation

```
yarn install
```

Rename .env.sample to .env.development.

To launch locally (http://localhost:8000/) with hot reload, run:

```
gatsby develop
gastby serve
```

You can force a refresh of the Graph QL data from the command line with:

```
curl -X POST http://localhost:8000/__refresh
```
