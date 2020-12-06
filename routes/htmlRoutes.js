const path = require("path");

module.exports = function(app) {
// This handles the GET request for the / to load the index.html page.
app.get("/", function(req, res){
   res.sendFile(path.join(__dirname, "../public/index.html"));
});

// This handles the GET request for the /notes to load the notes.html page.
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
 });

};