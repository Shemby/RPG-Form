const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routes/user");
const sheetRoutes = require("./routes/sheet");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRoutes);
app.use(sheetRoutes);
app.use(cors());

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
