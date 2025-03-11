const { Kafka } = require('kafkajs');
const { MongoClient } = require('mongodb');

const kafka = new Kafka({
    clientId: 'consumer-client',
    brokers: ['localhost:9092'] // Update if needed
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const mongoClient = new MongoClient('mongodb://localhost:27017');

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'fake-users', fromBeginning: true });

    await mongoClient.connect();
    const db = mongoClient.db('kafkaDB');
    const collection = db.collection('users');

    await consumer.run({
        eachMessage: async ({ message }) => {
            const userData = JSON.parse(message.value.toString());
            await collection.insertOne(userData);
            console.log(`Stored in DB: ${JSON.stringify(userData)}`);
        },
    });
};

run().catch(console.error);
