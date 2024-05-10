const express = require("express");
const loanService = require("../services/loanservice");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const loan = await loanService.addLoan(req.body);
    res.json(loan);
  } catch (error) {
    console.error("Error adding new loan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const loans = await loanService.getAllLoans();
    res.json(loans);
  } catch (error) {
    console.error("Error fetching loans:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const loan = await loanService.getLoanById(id);
    if (loan) {
      res.json(loan);
    } else {
      res.status(404).json({ error: "Loan not found" });
    }
  } catch (error) {
    console.error("Error fetching loan details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLoan = await loanService.updateLoan(id, req.body);
    if (updatedLoan) {
      res.json(updatedLoan);
    } else {
      res.status(404).json({ error: "Loan not found" });
    }
  } catch (error) {
    console.error("Error updating loan details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const idInt = parseInt(id);
  try {
    const result = await loanService.deleteLoan(idInt);
    if (result) {
      res.json({ message: "Loan deleted successfully" });
    } else {
      res.status(404).json({ error: "Loan not found" });
    }
  } catch (error) {
    console.error("Error deleting loan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
