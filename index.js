var express = require("express");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let students = [];

app.get("/sum/:x1/:x2", (req, res) => {
    res.json({
        result : Number(req.params.x1) + Number(req.params.x2)
    })
})

app.get("sum", (rea, res) => {
    res.json({
        result: Number(req.query.x1) + Number(req.query.x2)
    })
})

app.get("/students", (req, res) => {
    res.json({
        students: students
    })
})

app.get("/students/:id", (req, res) => {
    res.json({
        students: students.find(item => item.id === Number(req.params.id))
    })
})

app.post("/students", (req, res) => {
    students.push({
        id: req.body.id,
        name: req.body.name
    })
    res.json({
            success: true
        })
})

app.put("/students/:id", (req, res) => {
    students = students.map(item => {
        if(item.id === Number(req.params.id)) {
            item.name = req.body.name
        }
        return item;
    })
    res.json({
        success: true
    })
})

app.delete("/students/:id", (req, res) => {
    students = students.filter(item => item.id !== req.params.id)
    res.json({
        success: true
    })
})

app.listen(3000, () => console.log("Sever is listening at 3000"));