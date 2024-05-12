const express = require("express");

const {
  getAllData,
  getLibrarianById,
  postNewLibrarian,
  patchLibrarian,
  deleteLibrarian,
} = require("../services/librarianservices");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await getAllData();

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const librarianId = parseInt(req.params.id);
    const librarianData = await getLibrarianById(librarianId);

    res.status(200).send(librarianData);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newLibrarian = req.body;
    const result = await postNewLibrarian(newLibrarian);

    res.status(201).send({
      data: result,
      message: "Librarian created successfully",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const librarianId = req.params.id;
  const patchData = req.body;

  if (
    !(
      patchData.librarian_name ||
      patchData.librarian_address ||
      patchData.librarian_contact
    )
  ) {
    return res.status(400).send("Fields are missing");
  }

  const result = await patchLibrarian(parseInt(librarianId), patchData);

  res.send({
    data: result,
    message: "Librarian has been updated",
  });
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await deleteLibrarian(id);

    res.status(200).send({
      message: `The librarian with the id ${id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
