const { Logger } = require('./dist/index');

const logger = new Logger();

logger.error('This is a test message');
logger.warn('This is a test message');
logger.log('This is a test message');
