const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {
  findLibrarian,
  findLibrarianById,
  addLibrarian,
  updateLibrarian,
  removeLibrarian,
} = require("../repositories/librarianrepository");

// Get all data
const getAllData = async () => {
  const data = await findLibrarian();

  if (!data) {
    throw Error("No librarian data found!");
  }
  return data;
};

const getLibrarianById = async (Librarian_ID) => {
  const data = await findLibrarianById(Librarian_ID);

  if (!data) {
    throw Error(`There is no librarian with the id ${Librarian_ID}`);
  }

  return data;
};

const postNewLibrarian = async (librarianData) => {
  const newLibrarian = await addLibrarian(librarianData);

  return newLibrarian;
};

const patchLibrarian = async (Librarian_ID, librarianData) => {
  await getLibrarianById(Librarian_ID);

  const updatedLibrarian = await updateLibrarian(Librarian_ID, librarianData);

  return updatedLibrarian;
};

const deleteLibrarian = async (Librarian_ID) => {
  await getLibrarianById(Librarian_ID);

  await removeLibrarian(Librarian_ID);
};

module.exports = {
  getAllData,
  getLibrarianById,
  postNewLibrarian,
  patchLibrarian,
  deleteLibrarian,
};
