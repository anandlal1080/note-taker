const express = require("express");

const app = express();
const PORT = 8080;

// Middleware!
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("../../../routes/htmlRoutes")(app);
require("../../../routes/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})