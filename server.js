const axios = require('axios');

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
setInterval(pingServer, 300000);

// Initial ping to start immediately
pingServer();
