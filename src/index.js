const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routes/user");
const sheetRoutes = require("./routes/sheet");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRoutes);
app.use(sheetRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
