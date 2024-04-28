const bookRepository = require("../bookjam/components/repositories/bookRepository");

async function addBook(bookData) {
  return await bookRepository.addBook(bookData);
}

async function getAllBooks() {
  return await bookRepository.getAllBooks();
}

async function getBookById(id) {
  return await bookRepository.getBookById(id);
}

async function updateBook(id, bookData) {
  return await bookRepository.updateBook(id, bookData);
}

async function deleteBook(id) {
  return await bookRepository.deleteBook(id);
}

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
