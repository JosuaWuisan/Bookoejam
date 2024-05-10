const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {
  findUser,
  findUserById,
  addUser,
  updateUser,
  removeUser,
} = require("../services/userservices");

// Get all data
const getAllData = async () => {
  const data = await findUser();

  if (!data) {
    throw Error("No user data found!");
  }
  return data;
};

const getUserById = async (User_ID) => {
  const data = await findUserById(User_ID);

  if (!data) {
    throw Error(`There is no user with the id ${User_ID}`);
  }

  return data;
};

const postNewUser = async (userData) => {
  const newUser = await addUser(userData);

  return newUser;
};

const patchUser = async (User_ID, userData) => {
  await getUserById(User_ID);

  const updatedUser = await updateUser(User_ID, userData);

  return updatedUser;
};

const deleteUser = async (User_ID) => {
  await getUserById(User_ID);

  await removeUser(User_ID);
};

module.exports = {
  getAllData,
  getUserById,
  postNewUser,
  patchUser,
  deleteUser,
};
