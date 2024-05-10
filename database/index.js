const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function connectDB() {
  await prisma.$connect();
}

async function disconnectDB() {
  await prisma.$disconnect();
}

module.exports = prisma;
module.exports.connectDB = connectDB;
module.exports.disconnectDB = disconnectDB;
