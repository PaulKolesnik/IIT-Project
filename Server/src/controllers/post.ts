import Post from '../models/post-model'
import { Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";

const getAllPosts = async (req: Request, res: Response) => {
    console.log('Get All Posts')
    try {
        const sender = req.query.sender
        let posts
        if (sender != null || sender != undefined) {
            posts = await Post.find({ 'sender': sender })
        }
        else {
            posts = await Post.find()
        }
        res.status(200).send(posts)
    }
    catch (err) {
        res.status(400).send({
            'error': err.message
        })
    }
}

const createNewPost = async (req: Request, res: Response) => {
    console.log(req.body)
    let sender = req.body._id
    if (req.body._id == null) {
        sender = req.body.sender
    }
    const myPost = new Post({
        message: req.body.message,
        sender: sender,
        imageUrl: req.body.imageUrl
    })

    try {
        const newPost = await myPost.save()
        res.status(200).send(newPost)
    }
    catch (err) {
        res.status(400).send({
            'error': err.message
        })
    }
}

const getPostById = async (req: Request, res: Response) => {
    console.log('Get Post By ID , ID = ' + req.params.id)
    const id = req.params.id
    if (id == null || id == undefined) {
        return res.status(400).send({
            'error': 'no email exsits'
        })
    }

    try {
        const post = await Post.findById(id)
        if (post == null) {
            res.status(400).send({
                'error': 'post doesnt exist'
            })
        }
        else {
            res.status(200).send(post)
        }
    }
    catch (err) {
        res.status(400).send({
            'error': err.message
        })
    }
}

const deletePostById = async (req: Request, res: Response) => {
    console.log('Delete Post By ID , ID = ' + req.params.id)
    if (req.params.id == null || req.params.id == undefined) {
        return res.status(400).send({
            'error': 'no id provided'
        })
    }

    try {
        await Post.deleteOne({ _id: req.params.id })
        res.status(200).send()
    }
    catch (err) {
        res.status(400).send({
            'error': err.message
        })
    }
}

const updatePost = async (req: Request, res: Response) => {
    console.log("Update A Post");
    const postId = req.body._id
    const postMessage = req.body.message
    if (!!postId && !!postMessage) {
        try {
            const post = await Post.find({ _id: postId })
            if (!post) {
                await Post.findOneAndUpdate({ _id: postId }, { message: postMessage })
                return res.status(StatusCodes.OK).send({
                    'message': 'post updated'
                })
            }
        }
        catch (err) {
            return res.status(StatusCodes.BAD_REQUEST).send({
                error: err.message
            });
        }
    }
    return res.status(StatusCodes.BAD_REQUEST).send({
        error: "Didnt Get Post ID OR Post Message"
    });
}

export =
    {
        getAllPosts,
        createNewPost,
        getPostById,
        deletePostById,
        updatePost
    }