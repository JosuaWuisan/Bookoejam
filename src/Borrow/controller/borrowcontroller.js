const express = require("express");
const borrowService = require("../services/borrowservices");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const borrow = await borrowService.addBorrow(req.body);
    res.json(borrow);
  } catch (error) {
    console.error("Error adding new borrow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const borrows = await borrowService.getAllBorrows();
    res.json(borrows);
  } catch (error) {
    console.error("Error fetching borrows:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const borrow = await borrowService.getBorrowById(id);
    if (borrow) {
      res.json(borrow);
    } else {
      res.status(404).json({ error: "Borrow not found" });
    }
  } catch (error) {
    console.error("Error fetching borrow details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBorrow = await borrowService.updateBorrow(id, req.body);
    if (updatedBorrow) {
      res.json(updatedBorrow);
    } else {
      res.status(404).json({ error: "Borrow not found" });
    }
  } catch (error) {
    console.error("Error updating borrow details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);
  try {
    const result = await borrowService.deleteBorrow(idInt);
    if (result) {
      res.json({ message: "Borrow deleted successfully" });
    } else {
      res.status(404).json({ error: "Borrow not found" });
    }
  } catch (error) {
    console.error("Error deleting borrow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
