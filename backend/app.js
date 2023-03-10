const express = require("express");
const app = express();
let cors = require("cors");
const router = require("./routers");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
