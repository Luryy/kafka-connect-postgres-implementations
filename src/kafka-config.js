const { Kafka, logLevel } = require('kafkajs');

const kafka = new Kafka({
  brokers: [`${process.env.HOST}:${process.env.KAFKA_PORT}`],
  logLevel: logLevel.WARN,
  clientId: 'postgres-consumer',
});

module.exports = kafka;
