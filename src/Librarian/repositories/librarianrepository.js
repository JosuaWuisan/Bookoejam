const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Find all data
const findLibrarian = async () => {
  const findData = await prisma.librarian.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return findData;
};

// Find librarian data by id
const findLibrarianById = async (Librarian_ID) => {
  const Data = await prisma.librarian.findUnique({
    where: {
      id: Librarian_ID,
    },
  });

  return Data;
};

// adding librarian data
const addLibrarian = async (LibrarianData) => {
  const newLibrarian = await prisma.librarian.create({
    data: {
      username: LibrarianData.username,
      password: LibrarianData.password,
      contact: LibrarianData.contact,
      role: LibrarianData.role,
    },
  });

  return newLibrarian;
};

const updateLibrarian = async (Librarian_ID, librarianData) => {
  const updatedLibrarian = await prisma.librarian.update({
    where: {
      id: parseInt(Librarian_ID),
    },
    data: {
      username: librarianData.username,
      password: librarianData.password,
      contact: librarianData.contact,
      role: librarianData.role,
    },
  });
  return updatedLibrarian;
};

const removeLibrarian = async (Librarian_ID) => {
  await prisma.librarian.delete({
    where: {
      id: Librarian_ID,
    },
  });
};

module.exports = {
  findLibrarian,
  findLibrarianById,
  addLibrarian,
  updateLibrarian,
  removeLibrarian,
};
