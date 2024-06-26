const express = require("express");
const adminService = require("../services/adminservices");
const { connectDB } = require("../../../database");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const admin = await adminService.createNewAdmin(req.body);
    res.json(admin);
  } catch (error) {
    console.error("Error adding new user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const admins = await adminService.getAllData();
    res.json(admins);
  } catch (error) {
    console.error("Error fetching users:", error);
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
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching admin details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAdmin = await adminService.updatingAdmin(id, req.body);
    if (updatedAdmin) {
      res.json(updatedAdmin);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await adminService.removeAdmin(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
