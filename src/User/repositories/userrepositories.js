const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Find all user data
const findData = async () => {
  return await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

// Find user data by id
const findDataById = async (User_ID) => {
  return await prisma.user.findUnique({
    where: {
      id: parseInt(User_ID),
    },
  });
};

// Add new user data
const addUser = async (userData) => {
  return await prisma.user.create({
    data: {
      username: userData.username,
      password: userData.password,
      contact: userData.contact,
      role: userData.role,
    },
  });
};

// Update user data by id
const updateUser = async (User_ID, userData) => {
  return await prisma.user.update({
    where: {
      id: parseInt(User_ID),
    },
    data: {
      username: userData.username,
      password: userData.password,
      contact: userData.contact,
      role: userData.role,
    },
  });
};

// Delete user data by id
const removeUser = async (User_ID) => {
  await prisma.user.delete({
    where: {
      id: parseInt(User_ID),
    },
  });
};

module.exports = {
  findData,
  findDataById,
  addUser,
  updateUser,
  removeUser,
};
