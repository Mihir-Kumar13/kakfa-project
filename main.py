# Install dependencies: pip install kafka-python faker
from kafka import KafkaProducer # type: ignore
from faker import Faker # type: ignore
import json
import time

fake = Faker()
producer = KafkaProducer(
    bootstrap_servers='localhost:9092', 
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

topic = 'fake-users'
N = 10  # Number of messages to send

for _ in range(N):
    user_data = {
        "name": fake.name(),
        "email": fake.email(),
        "address": fake.address(),
        "phone": fake.phone_number()
    }
    producer.send(topic, user_data)
    print(f"Sent: {user_data}")
    time.sleep(1)  # Adjust as needed

print("Finished sending messages.")
  # Adjust frequency as needed
