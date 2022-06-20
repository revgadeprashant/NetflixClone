import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async(request, response) => {
    // console.log(request.body);

    const newUser = new User({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        cpassword: request.body.cpassword
    })
    try {
        const userexist = await User.findOne({ email: request.body.email });
        if (userexist) {
            response.status(422).json("email already exist")
        } else if (request.body.password != request.body.cpassword) {
            response.status(422).json("Password not match")
        } else {
            const saveUser = await newUser.save();
            console.log(request.body);
            response.status(200).json({ message: " user register successfully ", saveUser });
        }
    } catch (error) {
        response.status(500).json("Error while registering user ", error);
    }

}

export const loginUser = async(request, response) => {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            response.status(500).json({ error: "Please enter the correct email and password" })
        }
        const userLogIn = await User.findOne({ email: email });
        if (userLogIn) {
            const passmatch = await bcrypt.compare(password, userLogIn.password);
            if (!passmatch) {
                response.status(400).json({ error: "enter correct" });
            } else {
                const acessToken = jwt.sign({
                        id: userLogIn._id,
                        // isAdmin: userLogIn._isAdmin
                    },
                    process.env.SECRET_KEY, { expiresIn: "2d" });
                console.log(userLogIn);
                response.status(200).json({ message: "userLogIn sucessfully", userLogIn, acessToken })
            }
        } else {
            response.status(400).json({ error: "user error" })
        }

    } catch (error) {
        response.status(500).json("Error while login user ", error);
    }

}