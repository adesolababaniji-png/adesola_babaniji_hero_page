import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/music_syllabus/index.html");   
})

app.post("/submit", (req, res) => {
    console.log(req.body.username, req.body.password);
    if (req.body.username === "music" && req.body.password === "7notes") {
        res.sendFile(__dirname + "/music_syllabus/music_syllabus.html");
    } else {
        res.send(`
                <h1 style = "
                    text-align: center;
                    margin-top: 250px;
                    font-family: calibri;
                ">
                    Incorrect username or password
                </h1>
            `);
    }
})

app.listen(port, () => {
    console.log(`port ${port} is listening ok!`);
})