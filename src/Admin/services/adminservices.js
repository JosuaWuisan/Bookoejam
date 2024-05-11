const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const adminRepository = require("../repositories/adminrepositories");

// Get all admin data
async function getAllData() {
  const Data = await adminRepository.findData();
  return Data;
}

// Get admin by ID
async function getDataById(Admin_ID) {
  const Data = await adminRepository.getAdminById(Admin_ID);

  if (!Data) {
    throw Error(`There is no admin with ID ${Admin_ID}`);
  }
  return Data;
}

// Add new admin
async function createNewAdmin(adminData) {
  const newAdmin = await adminRepository.addAdmin(adminData);
  return newAdmin;
}

// Update admin
async function updatingAdmin(Admin_ID, adminData) {
  await adminRepository.findDataById(Admin_ID);

  const updatedAdmin = await adminRepository.updateAdmin(Admin_ID, adminData);

  return updatedAdmin;
}

// Delete admin
async function removeAdmin(Admin_ID) {
  await adminRepository.findDataById(Admin_ID);

  await adminRepository.deleteAdmin(Admin_ID);
}

module.exports = {
  getAllData,
  getDataById,
  createNewAdmin,
  updatingAdmin,
  removeAdmin,
};
