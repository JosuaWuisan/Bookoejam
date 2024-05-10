const express = require("express");

const {
  getAllData,
  getUserById,
  postNewUser,
  patchUser,
  deleteUser,
} = require("../services/userservices");

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
    const userId = parseInt(req.params.id);
    const userData = await getUserById(userId);

    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    const result = await postNewUser(newUser);

    res.status(201).send({
      data: result,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const userId = req.params.id;
  const patchData = req.body;

  if (
    !(patchData.user_name || patchData.user_address || patchData.user_contact)
  ) {
    return res.status(400).send("Fields are missing");
  }

  const result = await patchUser(parseInt(userId), patchData);

  res.send({
    data: result,
    message: "User has been updated",
  });
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await deleteUser(id);

    res.status(200).send({
      message: `The user with the id ${id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
