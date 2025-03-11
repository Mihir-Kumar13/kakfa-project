const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'prodcuer-client',
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const sendMessage = async () => {
  await producer.connect();
 await producer.send({
    topic: 'rider-updates',
    messages: [
      { partition:0 , 
        key: "location updates", 
        value: JSON.stringify({ name: "Rider 1", location: "Location 1" }),}
    ],
  });
  console.log("Message sent successfully!");
  await producer.disconnect();
};

sendMessage();
