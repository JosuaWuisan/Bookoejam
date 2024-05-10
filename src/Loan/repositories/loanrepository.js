const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function connectDB() {
  await prisma.$connect();
}

async function disconnectDB() {
  await prisma.$disconnect();
}

async function addLoan(loanData) {
  return await prisma.loan.create({ data: loanData });
}

async function getAllLoans() {
  return await prisma.loan.findMany();
}

async function getLoanById(id) {
  return await prisma.loan.findUnique({ where: { id } });
}

async function updateLoan(id, loanData) {
  return await prisma.loan.update({ where: { id }, data: loanData });
}

async function deleteLoan(id) {
  return await prisma.loan.delete({ where: { id } });
}

module.exports = {
  connectDB,
  disconnectDB,
  addLoan,
  getAllLoans,
  getLoanById,
  updateLoan,
  deleteLoan,
};
