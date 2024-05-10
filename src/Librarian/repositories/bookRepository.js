const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addBook(bookData) {
  return await prisma.librarian.create({ data: bookData });
}

async function getAllBooks() {
  return await prisma.librarian.findMany();
}

async function getBookById(id) {
  return await prisma.librarian.findUnique({ where: { id } });
}

async function updateBook(id, bookData) {
  return await prisma.librarian.update({
    where: { id },
    data: bookData,
  });
}

async function deleteBook(id) {
  return await prisma.librarian.delete({ where: { id } });
}

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
