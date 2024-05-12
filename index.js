const express = require("express");
const bookController = require("./src/Book/controller/bookController");
const adminController = require("./src/Admin/controller/adminController");
const usercontroller = require("./src/User/controller/usercontroller");
const librariancontroller = require("./src/Librarian/controller/librariancontroller");
const borrowcontroller = require("./src/Borrow/controller/borrowcontroller");
const { connectDB, admin } = require("./database");

const app = express();
const PORT = 5000;

app.use(express.json());
// Admin End-Points
app.use("/api/admins/books", bookController);
app.use("/api/admins/loans", borrowcontroller);

// // Book End-Points
// app.use("/api/books/loans", borrowcontroller);

// Librarian End-Points
app.use("/api/librarians/loans", borrowcontroller);
app.use("/api/librarians/books", bookController);

// // Loan End-Points
// app.use("/api/loans/admins", adminController);
// app.use("/api/loans/books", bookController);

// Users End-Points
app.use("/api/users/books", bookController);
app.use("/api/users/loans", borrowcontroller);

// Regular End-Points
app.use("/api/books", bookController);
app.use("/api/admins", adminController);
app.use("/api/users", usercontroller);
app.use("/api/loans", borrowcontroller);
app.use("/api/librarians", librariancontroller);

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
