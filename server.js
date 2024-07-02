const axios = require('axios');

const mainServerUrl = 'http://your-main-server-url.com'; // Replace with your main server URL

const pingServer = async () => {
    try {
        await axios.get(mainServerUrl);
        console.log('Pinged the main server successfully');
    } catch (error) {
        console.error('Error pinging the main server:', error);
    }
};

// Ping the server every 5 minutes (300,000 milliseconds)
setInterval(pingServer, 300000);

// Initial ping to start immediately
pingServer();
