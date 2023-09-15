const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./configration/database");


// Config
dotenv.config({ path: "./configration/config.env" });

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})