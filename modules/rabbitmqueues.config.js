var config = require('../config');

config.rabbitmqueues = {};
config.rabbitmqueues.host = "s-rmq-01";
config.rabbitmqueues.port = 55672;
config.rabbitmqueues.user = 'guest';
config.rabbitmqueues.pass = 'guest';
config.rabbitmqueues.vhost = '%2F';

module.exports = config;