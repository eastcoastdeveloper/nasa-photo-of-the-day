const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(helmet());

app.use("/api/nasa", require("./routes/nasa"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
