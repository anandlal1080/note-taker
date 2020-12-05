const { json } = require("express");
const fs = require("fs");



module.exports = function (app, student) {

app.get("/api/notes", function(req, res){
   res.json(fs.readFile('../../../db/db.json', (err, data) => {
    if (err) throw err;
    let savedNotes = JSON.parse(data);
    console.log(savedNotes);
}))
});

app.post("/api/notes", function(req, res){

    res.json(fs.readFile('../../../db/db.json', (err, data) => {
        if (err) throw err;
        let savedNotes = JSON.parse(data);
        console.log(savedNotes);
        savedNotes.push(req.body)
    fs.writeFile("../../../db/db.json", JSON.stringify(savedNotes), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    })
    }));
    
    res.send()
    });
    
};