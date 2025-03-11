# Kafka Project

This project demonstrates the integration of Apache Kafka with Python and Node.js, utilizing Docker containers for Kafka, Zookeeper, and MongoDB. The pipeline involves generating fake data using Python's Faker library, producing it to Kafka, and consuming it with a Node.js application that stores the data in MongoDB.

## Project Overview

- **Producer (Python)**: `main.py` generates fake data using the Faker library and sends it to a Kafka topic.
- **Consumer (Node.js)**: `consumer.js` reads messages from the Kafka topic and stores them in MongoDB.
- **Kafka & Zookeeper**: Managed in Docker containers.
- **MongoDB**: Runs in a Docker container to store the consumed data.

## Prerequisites

Ensure you have the following installed on your system:

- Docker & Docker Compose
- Python 3.18
- Node.js & npm

## Installation & Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/Mihir-Kumar13/kakfa-project.git
   cd kafka-project
   ```

2. **Start Docker containers**

   ```sh
   docker-compose up -d
   ```

   This will start Kafka, Zookeeper, and MongoDB in containers.

3. **Install Python dependencies**

   ```sh
   pip install -r requirements.txt
   ```

4. **Run the Kafka producer**

   ```sh
   python main.py
   ```

5. **Install Node.js dependencies**

   ```sh
   npm install
   ```

6. **Run the Kafka consumer**

   ```sh
   node consumer.js
   ```




```

## Stopping the Containers

```sh
docker-compose down
```

