const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Find all admin data
const findData = async () => {
  return await prisma.admin.findMany({
    orderBy: {
      Admin_ID: "asc",
    },
  });
};

// Find admin data by id
const findDataById = async (Admin_ID) => {
  return await prisma.admin.findUnique({
    where: {
      Admin_ID,
    },
  });
};

// Add new admin data
const addAdmin = async (adminData) => {
  return await prisma.admin.create({
    data: {
      User: adminData.User,
      User_Contact: adminData.User_Contact,
    },
  });
};

// Update admin data by id
const updateAdmin = async (Admin_ID, adminData) => {
  return await prisma.admin.update({
    where: {
      Admin_ID: parseInt(Admin_ID),
    },
    data: {
      User: adminData.User,
      User_Contact: adminData.User_Contact,
    },
  });
};

// Delete admin data by id
const deleteAdmin = async (Admin_ID) => {
  await prisma.admin.delete({
    where: {
      Admin_ID,
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
