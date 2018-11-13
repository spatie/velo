const axios = require("axios");

module.exports = (req, res) => {
    axios
        .get("https://www.velo-antwerpen.be/availability_map/getJsonObject")
        .then(response => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(response.data));
        })
        .catch(error => {
            res.setHeader("Content-Type", "application/json");
            res.end(error);
        });
};
