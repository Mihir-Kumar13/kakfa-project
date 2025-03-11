const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'admin-client',
  brokers: ["localhost:9092"]
});

const admin = kafka.admin();

const manageTopics = async () => {
  try {
    await admin.connect();

    // Create a new topic
    console.log("Creating topic: new-topic...");
    await admin.createTopics({
      topics: [{ topic: 'fake-users', numPartitions: 2 }]
    });

    // ✅ List all topics
    console.log("Listing all topics...");
    const topics = await admin.listTopics();
    console.log("Available Topics:", topics);

    // ✅ Delete a topic (optional)
    // console.log("Deleting topic: old-topic...");
    // await admin.deleteTopics({ topics: ['old-topic'] });

    await admin.disconnect();
  } catch (error) {
    console.error("Error in Admin API:", error);
  }
};

manageTopics();
