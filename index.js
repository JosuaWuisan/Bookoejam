const express = require("express");
const bookController = require("./src/controller/bookController");
const { connectDB } = require("./repositories/bookRepository");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/books", bookController);

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();
