import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app-plain',
  brokers: ['localhost:9092'],
});

(async () => {
  const admin = kafka.admin();
  admin.createTopics({ topics: [{ topic: 'topic-a' }] });
  const producer = kafka.producer();
  await producer.connect();

  await producer.send({
    topic: 'topic-a',
    messages: [{ value: 'Hello KafkaJS' }],
  });
  await producer.disconnect();
})();
