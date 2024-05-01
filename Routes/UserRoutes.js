const express = require("express");
const CreateUserData = require("../Controllers/UserController");
const router = express.Router();


router.post("/post", CreateUserData);

module.exports = router;
