const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Find all data
const findUser = async () => {
  const findData = await prisma.user.findMany({
    orderBy: {
      User_ID: "asc",
    },
  });

  return findData;
};

// Find user data by id
const findUserById = async (User_ID) => {
  const Data = await prisma.user.findUnique({
    where: {
      User_ID,
    },
  });

  return Data;
};

// adding user data
const addUser = async (UserData) => {
  const newUser = await prisma.user.create({
    data: {
      User_name: UserData.User_name,
      User_address: UserData.User_address,
      User_contact: UserData.User_contact,
    },
  });

  return newUser;
};

const updateUser = async (User_ID, userData) => {
  const updatedUser = await prisma.user.update({
    where: {
      User_ID: parseInt(User_ID),
    },
    data: {
      User_name: userData.User_name,
      User_address: userData.User_address,
      User_contact: userData.User_contact,
    },
  });
  return updatedUser;
};

const removeUser = async (User_ID) => {
  await prisma.user.delete({
    where: {
      User_ID,
    },
  });
};

module.exports = {
  findUser,
  findUserById,
  addUser,
  updateUser,
  removeUser,
};
