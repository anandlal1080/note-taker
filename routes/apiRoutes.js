const { json } = require("express");
const fs = require("fs");
const uuid = require("uuid");
const path = require("path");



module.exports = function (app) {

app.get("/api/notes", function(req, res){
   res.sendFile(path.join(__dirname, "/../db/db.json"), (err, data) => {
    if (err) throw err;
    
    
})
});

app.post("/api/notes", function(req, res){

    res.json(fs.readFile('../../../db/db.json', (err, data) => {
        if (err) throw err;
        let savedNotes = JSON.parse(data);
        newEntry = req.body
        newEntry.id = uuid.v4();
        savedNotes.push(newEntry)
    fs.writeFile("../../../db/db.json", JSON.stringify(savedNotes), (err) => {
        if (err) throw err;
        console.log('Data written to file');
        
    })
}));
    
    });
    
};