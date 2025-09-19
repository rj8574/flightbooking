const express = require("express");
const app = express();
const { ServerConfig} = require("./config");
const apiRoutes = require("./routes");


app.use('/api', apiRoutes)

app.get("/", (req, res) => {
  res.send("Hello World! Server is running.");
});
app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on port ${ServerConfig.PORT}`);
 
});
