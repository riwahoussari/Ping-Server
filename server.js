const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 10000;

const coffeeHubServerUrl = 'https://coffeehub-u2y1.onrender.com/'; // Replace with your main server URL

const pingServer = async () => {
    try {
        await axios.get(coffeeHubServerUrl);
        console.log('Pinged the main server successfully');
    } catch (error) {
        console.error('Error pinging the main server:', error);
    }
};

// Ping the server every 5 minutes (300,000 milliseconds)
setInterval(pingServer, 10000);

// Initial ping to start immediately
pingServer();


//port
app.get('*', (req, res) => {
  console.log("* get request");
  res.json({res: "hey"});
  console.log("* responded");
});
app.listen(PORT, () => {
  console.log(`Server is up and running`);
});
