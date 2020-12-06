const express = require("express");

const app = express();
//Port needed for heroku deployment
var PORT = process.env.PORT || 3081;

// Middleware!
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Linking to html and api routes.
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//Start listening on server port 3081
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})