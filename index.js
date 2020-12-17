const axios = require("axios")
const urls = ["https://github.com/Baphomet-21/uptimerobot/blob/master/index.js"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
