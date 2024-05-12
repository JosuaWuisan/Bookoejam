const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function connectDB() {
  await prisma.$connect();
}

async function disconnectDB() {
  await prisma.$disconnect();
}

async function addBorrow(borrowData) {
  return await prisma.borrow.create({ data: borrowData });
}

async function getAllBorrows() {
  return await prisma.borrow.findMany();
}

async function getBorrowById(id) {
  return await prisma.borrow.findUnique({ where: { id } });
}

async function updateBorrow(id, borrowData) {
  return await prisma.borrow.update({
    where: { id: parseInt(id) }, // Convert id to an integer
    data: borrowData,
  });
}

async function deleteBorrow(id) {
  return await prisma.borrow.delete({ where: { id } });
}

module.exports = {
  addBorrow,
  getAllBorrows,
  getBorrowById,
  updateBorrow,
  deleteBorrow,
};
