const { json } = require("express");
const fs = require("fs");
const uuid = require("uuid");
const path = require("path");




module.exports = function (app) {
//This API would send the db.json file when the GET request is sent from the notes.html
app.get("/api/notes", function(req, res){
   res.sendFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;
    
    
})
});
// This API would take data from the notes.html and add to the db.json file
app.post("/api/notes", function(req, res){
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    newEntry = req.body
        newEntry.id = uuid.v4();
        savedNotes.push(newEntry)
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes))
    res.json(savedNotes)
    
});
// This API would handle the deleting of entries from the notes.html
app.delete("/api/notes/:id", function(req, res){
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json'));
    let updatedNotes = savedNotes.filter((data) => data.id !== req.params.id)
    fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes))
    res.json(updatedNotes)
});

};


