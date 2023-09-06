const express = require("express");
const { sequelize } = require("./models");
const inventoryRoutes = require("./routes/inventoryRoutes");
const inventoryController = require("./controller/inventoryController");
const app = express();
app.use(express.json());

app.use("/inventory", inventoryRoutes);

const connectDb = sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Database synchronized with models.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

async function startServer() {
  await connectDb;
  app.listen(3001, () => {
    console.log("Server started on 3001");
  });
}

startServer();
