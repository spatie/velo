const http = require("https");

module.exports = (req, res) => {
    res.setHeader("Content-Type", "application/json");

    http.get("https://www.velo-antwerpen.be/availability_map/getJsonObject", velo => {
        velo.on("data", chunk => res.write(chunk));
        velo.on("end", () => res.end());
    }).on("error", e => {
        res.end(JSON.stringify(e));
    });
};
