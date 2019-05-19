# @4alltecnologia/http-errors

----

[![CircleCI](https://circleci.com/gh/4alltecnologia/http-errors/tree/master.svg?style=svg)](https://circleci.com/gh/4alltecnologia/http-errors/tree/master) <img src='https://img.shields.io/github/tag/4alltecnologia/http-errors.svg' alt='latest semver version' /> <img src='https://img.shields.io/github/issues/4alltecnologia/http-errors.svg' alt='open issues badge' /> <img src='https://img.shields.io/github/issues-pr/4alltecnologia/http-errors.svg' alt='open pull requests badge' />

## Description
An error module to standarize error usage inside a project

## Installation
This is a [Node.js](https://nodejs.org/en/) module availale through [npm](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 8 or higher is required.

Installation is done by using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally).

```sh
npm install @4alltecnologia/http-erros
```

## Usage

```javascript
const http_errors = require('@4alltecnologia/http-errors');

const error = new http_errors.BadRequest('Some error message');

console.log(error) // { message: 'Some error message', code: 'BAD_REQUEST' }
```
