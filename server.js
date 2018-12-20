const express = require("express");
const cors = require("cors");
const port = parseInt(process.env.PORT, 10) || 4000;

const app = express();

app.use(cors());

app.get("/api/stations", require("./api/stations"));

app.listen(port, err => {
    if (err) throw err;
    console.log(`> API ready on http://localhost:${port}`);
});
