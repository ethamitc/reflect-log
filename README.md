# reflect-log

![](https://i.imgur.com/m0o5wIk.png)

A NPM package that makes your console messages look nice.

[Documentation](https://ethamitc.github.io/reflect-log/)

## Install

`npm i reflect-log`

## Example

```js
const { Logger } = require('reflect-log');

const logger = new Logger();

logger.error('This is a test message');
logger.warn('This is a test message');
logger.log('This is a test message');
```
