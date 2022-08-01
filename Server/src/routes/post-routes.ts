import express from 'express'
const router = express.Router();
import Post from '../controllers/post'
import authenticate from '../middleware/auth-middel'

router.get('/', Post.getAllPosts)
router.post('/', Post.createNewPost)
router.get('/:id', Post.getPostById)
router.delete('/:id', authenticate, Post.deletePostById)

export = router;