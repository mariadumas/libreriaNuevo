const express = require('express');
const app = express();
const homeRoutes = require("./routes/homeRoutes.js")

app.use(express.static("public"));

app.set("view engine", "ejs");



app.use('/', homeRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Sevidor corriendo en http://localhost:3000");
})

