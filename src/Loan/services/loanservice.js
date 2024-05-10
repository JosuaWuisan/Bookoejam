const loanRepository = require("../repositories/loanrepository");

async function addLoan(loanData) {
  return await loanRepository.addLoan(loanData);
}

async function getAllLoans() {
  return await loanRepository.getAllLoans();
}

async function getLoanById(id) {
  return await loanRepository.getLoanById(id);
}

async function updateLoan(id, loanData) {
  return await loanRepository.updateLoan(id, loanData);
}

async function deleteLoan(id) {
  return await loanRepository.deleteLoan(id);
}

module.exports = {
  addLoan,
  getAllLoans,
  getLoanById,
  updateLoan,
  deleteLoan,
};
