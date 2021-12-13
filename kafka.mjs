import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app-plain',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'my-group-plain' });

(async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'topic-a', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Consumed message ${message.value}`);
      throw new Error('Something went wrong');
    },
  });
})();
