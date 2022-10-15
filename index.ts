import express from "express";

const app = express();

app.get("/", (req, res) => res.send("NODEJS APPLICATION WITH TYPESCRIPT!"))

app.listen(4000,() => console.log("App is running"))