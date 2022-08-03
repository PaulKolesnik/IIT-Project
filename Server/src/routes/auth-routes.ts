import express from 'express'
const router = express.Router();
import Auth from '../controllers/auth'

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.get("/refresh", Auth.renewToken);

export = router;
