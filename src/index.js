const kafka = require('./kafka-config');

(async () => {

    const consumer = kafka.consumer({
        groupId: 'KafkaConsumer',
    });

    await consumer.connect();
    await consumer.subscribe({
      topic: `${process.env.KAFKA_SERVER_NAME}.public.user_info`, // ${database.server.name}.public.${table-name}
    });

    await consumer.run({
      async eachMessage({ message }) {
        if (message.value !== null) {
          const { payload } = JSON.parse(message.value.toString());
          console.log(payload);
        }
      },
    });

    console.log('Running Kafka Consumer!');
})();