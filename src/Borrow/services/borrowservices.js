const borrowRepository = require("../repositories/borrowrepository");

async function addBorrow(borrowData) {
  return await borrowRepository.addBorrow(borrowData);
}

async function getAllBorrows() {
  return await borrowRepository.getAllBorrows();
}

async function getBorrowById(id) {
  return await borrowRepository.getBorrowById(id);
}

async function updateBorrow(id, borrowData) {
  return await borrowRepository.updateBorrow(id, borrowData);
}

async function deleteBorrow(id) {
  return await borrowRepository.deleteBorrow(id);
}

module.exports = {
  addBorrow,
  getAllBorrows,
  getBorrowById,
  updateBorrow,
  deleteBorrow,
};
