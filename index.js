const express = require("express");
const bookController = require("./src/Librarian/controller/bookController");
const adminController = require("./src/Admin/controller/adminController");
const usercontroller = require("./src/User/controller/usercontroller");
const loancontroller = require("./src/Loan/controller/loancontroller");
const { connectDB } = require("./database");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/books", bookController);
app.use("/api/admins", adminController);
app.use("/api/users", usercontroller);
app.use("/api/loans/", loancontroller);

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
