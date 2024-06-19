# Network Tab Demo

A simple web application demonstrating the Network tab in DevTools using HTML, CSS, JavaScript, and Node.js.

## Description

This project provides a basic example to demonstrate how to use the Network tab in browser DevTools. It includes a Node.js server that serves static files and an API endpoint to simulate a network request.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/borntodev/network-tab-demo.git
   ```

2. Navigate to the project directory:

   ```sh
   cd network-tab-demo
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Server

Start the server by running:

```sh
node server.js
```

### Building and Running with Docker

To build and run the application using Docker, follow these steps:

1. Build the Docker image:

   ```sh
   docker build -t network-tab-demo .
   ```

2. Run the Docker container:

   ```sh
   docker run -p 3000:3000 network-tab-demo
   ```

   This will start the container and map port 3000 of the container to port 3000 on your local machine.

3. Access the application in your browser:

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

