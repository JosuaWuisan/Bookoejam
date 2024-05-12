const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Find all admin data
const findData = async () => {
  return await prisma.admin.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

// Find admin data by id
const findDataById = async (Admin_ID) => {
  return await prisma.admin.findUnique({
    where: {
      id: parseInt(Admin_ID),
    },
  });
};

// Add new admin data
const addAdmin = async (adminData) => {
  return await prisma.admin.create({
    data: {
      username: adminData.username,
      password: adminData.password,
      contact: adminData.contact,
      role: adminData.role,
    },
  });
};

// Update admin data by id
const updateAdmin = async (Admin_ID, adminData) => {
  return await prisma.admin.update({
    where: {
      id: parseInt(Admin_ID),
    },
    data: {
      ...adminData,
    },
  });
};

// Delete admin data by id
const deleteAdmin = async (Admin_ID) => {
  await prisma.admin.delete({
    where: {
      id: parseInt(Admin_ID),
    },
  });
};

module.exports = {
  findData,
  findDataById,
  addAdmin,
  updateAdmin,
  deleteAdmin,
};
