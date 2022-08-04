import { Request, Response } from 'express';
import User from '../models/user-model';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

const profileUpdate = async (req: Request, res: Response) => {
    console.log("profile update")
    const emailNew = req.body.email
    const passNew = req.body.password
    // validate email/password
    if (emailNew == null || emailNew == undefined || passNew == null || passNew == undefined) {
        res.status(StatusCodes.BAD_REQUEST).send({
            'message': 'new email or new password is null / undefined'
        })
    }
    // check if email is already exists id DB
    try {
        const user = await User.findOne({'email': emailNew})
        if (user != null) {
              return res.status(StatusCodes.BAD_REQUEST).send('Email is already registered')
        }
    }
    catch (err) {
        return res.status(StatusCodes.BAD_REQUEST).send({
              'err': err.message
        })
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(passNew, salt);
        // find the user
        const updatedUser = await User.findOne({'_id':req.body._id})
        if (updatedUser == null) {
            console.log("User cant be found")
            return res.status(StatusCodes.BAD_REQUEST).send({
                'message': 'Error, cant update user'
            })
        }
        // update the user
        await updatedUser.updateOne({
            email: emailNew,
            password: encryptedPassword
        })
        res.status(StatusCodes.OK).send(updatedUser)
    }
    catch (err) {
        return res.status(StatusCodes.BAD_REQUEST).send({
             'error': err.message 
        });
    }
}

export = {
    profileUpdate
}