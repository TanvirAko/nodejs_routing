// require files
const express = require('express');
const dotenv = require("dotenv").config();
const path = require('path');
// your port
const PORT = process.env.PORT || 6060;

// use express

const app = express();
app.use(express.static("public"))
// express config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// server maker
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get('/archive', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "archive.html"));
});
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/gallery.html"));
});
app.get('/location', (req, res) => {
    res.sendFile(path.join(__dirname,  "/public/location.html"));
});
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/menu.html"));
});
app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "news.html"));
});
app.get('/reservation', (req, res) => {
    res.sendFile(path.join(__dirname,"/public/reservation.html"));
});
app.get('/staff', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/staff.html"));
});
app.get("/form",(req, res) => {
    res.sendFile(path.join(__dirname,"/public/form.html"));
})
app.post("/form",(req, res) => {
    res.json(req.body)
})
app.listen(PORT, () => {
    console.log(`server running is successful on ${PORT} PORT`);
});
