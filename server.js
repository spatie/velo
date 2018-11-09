const express = require("express");
const axios = require("axios");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get("/stations", (req, res) => {
        axios
            .get("https://www.velo-antwerpen.be/availability_map/getJsonObject")
            .then(response => res.json(response.data));
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
