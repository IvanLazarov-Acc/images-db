const express = require("express");
const {
    loginUser,
    getUsers,
    // getUser,
    // updateUser,
    // deleteUser,
    registerUser,
} = require("../controllers/loginControllers.js");

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/", getUsers);

// router.get("/:id", getUser);

// router.put("/:id", updateUser);

// router.delete("/:id", deleteUser);


module.exports = router;