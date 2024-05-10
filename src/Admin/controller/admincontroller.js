const express = require("express");
const adminService = require("../services/adminservices");
const { connectDB } = require("C:/Users/user/Documents/Bookoejam/database");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const admin = await adminService.createAdmin(req.body);
    res.json(admin);
  } catch (error) {
    console.error("Error adding new admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const admins = await adminService.getAllAdmins();
    res.json(admins);
  } catch (error) {
    console.error("Error fetching admins:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await adminService.getAdminById(id);
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    console.error("Error fetching admin details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAdmin = await adminService.updateAdmin(id, req.body);
    if (updatedAdmin) {
      res.json(updatedAdmin);
    } else {
      res.status(404).json({ error: "Admin not found" });
    }
  } catch (error) {
    console.error("Error updating admin details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await adminService.deleteAdmin(id);
    res.json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
