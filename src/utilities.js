const {productionUrl, port} = require("./config");

const buildUrl = (endpoint) => {
    return process.env.NODE_ENV === "production" ? productionUrl + endpoint : `http://localhost:${port}${endpoint}`;
}

module.exports = {
    buildUrl
}