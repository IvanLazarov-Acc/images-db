const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const env = require('dotenv').config();

const loginRoutes = require("../server/routes/loginRouters.js");

const sequelize = require("./database/sequelize/database");

const PORT = process.env.PORT;

sequelize.sync().then(() => console.log("DB is ready"));

const app = express();
app.use(cors({origin:"*"}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());



//Routers
app.use("/user", loginRoutes);


app.get("/", (req, res) => {
    res.send("Hello in the api");
});

app.listen(PORT || 5000, () => console.log(`Server is running on port ${PORT}!`));