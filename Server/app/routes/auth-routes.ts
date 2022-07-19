const express = require("express");
const router = express.Router();

const Auth = require("../controllers/auth.ts");

router.post("/register", Auth.register);

router.post("/login", Auth.login);

router.get("/refresh", Auth.renewToken);

export = router;
