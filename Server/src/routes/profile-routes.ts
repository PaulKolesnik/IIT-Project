import express from 'express'
const router = express.Router();
import Profile from '../controllers/profile'

router.post('/', Profile.profileUpdate)

export = router;