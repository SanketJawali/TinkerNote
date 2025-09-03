import express from "express";

const port = 8080;
const app = express();

app.get('/hello', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
})
