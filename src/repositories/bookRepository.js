const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function connectDB() {
  await prisma.$connect();
}

async function disconnectDB() {
  await prisma.$disconnect();
}

async function addBook(bookData) {
  return await prisma.book.create({ data: bookData });
}

async function getAllBooks() {
  return await prisma.book.findMany();
}

async function getBookById(id) {
  return await prisma.book.findUnique({ where: { id } });
}

async function updateBook(id, bookData) {
  return await prisma.book.update({ where: { id }, data: bookData });
}

async function deleteBook(id) {
  return await prisma.book.delete({ where: { id } });
}

module.exports = {
  connectDB,
  disconnectDB,
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
