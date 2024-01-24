import jwt from "jsonwebtoken"
import crypto from "crypto"
import bcrypt from "bcryptjs"
import User from '../models/Users.js'
import Token from '../models/Token.js'
import { sendEmail } from "../utilities/sendEmail.js"

//CREATE USER
export const registerUser = async (req, res) => {
    const { username, password, email } = req.body
    
    if (!email || !password || !username) {
        return res.status(400).json({ msg: '❌ Please enter all fields' })
    }
    //verify email
    let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!email.match(emailFormat)) {
        return res.status(400).json({ msg: "❌ Please enter a valid email address❗" })
    }
    //verify password
    let passValid=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!password.match(passValid)) {
        return res.status(400).json({ msg: "🚫 Password must be between 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character" })
    }
    // check if user exists
    const userExists = await User.findOne({email})
    if (userExists) {
        return res.status(400).json({ msg: "🚫 This email already exists!" })
    }
    //register new user & assign token
    try {
        const newUser = await User.create({ username, password, email });
        console.log(newUser)
        jwt.sign({ userId: newUser._id, username: newUser.username }, process.env.JWT_SECRET, {}, (error, token) => {
            if(error) {
                console.log(error)
                return res.status(500).json({msg: "Something went wrong! Please try again later"}) 
            }
            res.cookie('token', token, {
                path: '/',
                httpOnly: true,
	            expires: new Date(Date.now() + 1000 * 86400),
	            sameSite: "none",
	            secure: true
            }).status(201).json({_id: newUser._id, username: newUser.username, token, msg: "successfully Logged in🥇"})
        })
    } catch(error) {
        if (error) {
            console.log(error)
			return res.status(500).json({msg: "Something went wrong! Please try again later"})
		}
    }
}

//GET USERS
export const getUsers = async(req, res) => {
    console.log(req.query.username)
    try{
        const users = req.query.new ? await Users.find().sort({ createdAt: -1} ).limit(5).select("-password") : await User.find().select("-password")
        return res.status(200).json({ users, status: 'Success', count: users.length })
    } catch(error) {
        return res.status(401).json({ status: 'Fail', msg: error })
    }
}

//GET USER
export const getUser = async(req, res) => {
    try{
        const {id} = req.params
        const user = await User.findById(id)
        return res.status(200).json(user)
    } catch(error) {
        console.log(error)
        return res.status(401).json({ status: 'Fail', msg: error })
    }
}
//LOGIN USER
export const login = async(req, res) => {
    const {password, email} = req.body
    if(!email || !password) {
        return res.status(400).json({msg: '❌ Please fill in all fields'})
    }
    //verify email
    let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!email.match(emailFormat)) {
        return res.status(400).json({msg: "❌ Please enter a valid email address❗"})
    }
    // verify password
    let passValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!password.match(passValid)) {
        return res.status(400).json({msg: "🚫 Password must be between 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"})
    }
    // check if user exists
    const userExists = await User.findOne({email})
    if (!userExists) {
        return res.status(400).json({msg: "🚫 This email does not exist!"})
    }
    const ifPasswordIsCorrect = await bcrypt.compare(password, userExists.password)
    if(!ifPasswordIsCorrect) {
        return res.status(400).json({msg: "🚫 Wrong credentials, please try again❗"})
    }
    try{
        if (userExists && ifPasswordIsCorrect) {
            jwt.sign({userId: userExists._id, username: userExists.username}, process.env.JWT_SECRET, {}, (error, token) => {
                if (error) {
                    console.log(error)
                    return res.status(400).json({msg: '🚫 Something wrong happenned we cannot verify you.'})
                }
                res.cookie('token', token, {
                    path: "/",
                    httpOnly: true,
                    expires: new Date(Date.now() + 1000 * 86400),
                    sameSite: "none",
                    secure: true
                }).status(200).json({id: userExists._id, username: userExists.username, token})
            })
        }
    }catch(error) {
        if (error) {
            console.log(error)
            return res.status(500).json({msg: "Something went wrong! Please try again later"})
        }
    }
}
//LOGIN STATUS
export const loginStatus = async(req,res) => {
    const {token} = req.cookies
    if (!token) {
        return res.status(400).json({msg: "No token found"})
    }
    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET)
    if (isTokenValid) {
        res.status(200).json(true)
    }else {
        res.status(400).json(false)
    }
}

//LOGOUT USER
export const logout = async(req, res) => {
    res.cookie('token', "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        sameSite: "none",
        secure: true
    })
    return res.status(200).json({message: "User has beeb successfully logged out"})
}
//UPDATE USER
export const userUpdate = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user._id, {$set: req.body}, {new:true}).select('-password')
        console.log(req.user._id)
        return res.status(200).json({msg: "User updated successfully🥇", data: updatedUser})
    } catch (error) {
        return res.status(500).json(error)
    }
}
//DELETE USER
export const deleteUser = async(req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.user._id)
        return res.status(200).json({message: "User successfuly deleted"})
    }catch (error) {
        res.status(401).json(error)
    }
}

//CHANGE PASSWORD
export const changePassword = async(req, res) => {
    const user = await User.findById(req.user._id)
    if (!user) {
        return res.status(401).json({message: "❌ User not found, You are not logged in, please sign up"})
    }
    const {previousPassword, password} = req.body
    if (!previousPassword || !password) {
        return res.status(401).json({message: "❌ Please enter all fields"})
    }
     //verify password
    let passValidation =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!password.match(passValidation)) {
        return res.status(400).json({msg: "🚫 Password must be between 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"})
    }
    const passwordMatch = await bcrypt.compare(previousPassword, user.password)
    if (!passwordMatch) {
        return res.status(400).json({msg: "🚫 Passwords did not match, please try again❗"})
    }
    try {
        if (user && passwordMatch) {
            user.password = password
            await user.save()
            return res.status(200).json({message: "Password has been changed successfully🥇"})
        }  
    }catch (error) {
        console.log(error)
        return res.status(401).json({status: 'Faulure', statusCode: 401, msg: error})
    }
}

// /FORGOT PASSWORD
export const forgotPassword = async(req, res) => {
    const { email } = req.body
    if (!email) {
        return res.status(401).json({ msg: "🚫 Enter the email in order to change your password"})
    }
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(401).json({ msg: "🚫 No user found!"})
    }
    //DELETE TOKEN IF IT EXISTS
    const token = await Token.findOne({ userId: user._id})
    if (token) {
        await Token.deleteOne()
    }
    // /CREATE TOKEN
    let resetToken = crypto.randomBytes(32).toString("hex") + user._id
     //hash token before saving 
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    // console.log(resetToken)
    await new Token({
        userId: user._id,
        token: hashedToken,
        createdAt: Date.now(),
        expiresAt: Date.now() + 30 * (60 * 1000) //30 mins
    }).save()
    // reset url
    const resetUrl = `${process.env.CLIENT_URL}/resetPassword/${resetToken}`
    //email message
    const message = `
        <h2>Hello 👋 ${user.username}</h2>
        <p>Please use the link below to reset your password</p>
        <p>🔗 This link will be valid for only 30 minutes 🕡</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        <p>Kind Regards 🙏</p>
        <p>Saline Book Shop 📚 Team</p>
    `
    const sender = process.env.USER_EMAIL
    const subject = 'Password reset Request'
    const receiver = user.email
    try {
        await sendEmail(subject, message, receiver, sender)
        return res.status(200).json({ success: true, message: "📧 Password reset link sent to your email" })
    } catch(error) {
        console.log(error)
        return res.status(500).json({ status: 'Failure', msg: error })
    }
}