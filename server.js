import express from "express";
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.listen(3000, () => { console.log("App listening on port 3000"); });

app.use(express.static('public'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "/index.html"));
});

export default app;