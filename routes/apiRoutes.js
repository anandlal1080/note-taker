const { json } = require("express");
const fs = require("fs");
const uuid = require("uuid");
const path = require("path");
const { report } = require("process");



module.exports = function (app) {

app.get("/api/notes", function(req, res){
   res.sendFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;
    
    
})
});

app.post("/api/notes", function(req, res){
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    newEntry = req.body
        newEntry.id = uuid.v4();
        savedNotes.push(newEntry)
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes))
    res.json(savedNotes)
    
});

app.delete("/api/notes/:id", function(req, res){
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    let updatedNotes = savedNotes.filter((data) => data.id !== req.params.id)
    fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes))
    res.json(updatedNotes)
});

};


