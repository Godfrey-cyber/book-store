import jwt from "jsonwebtoken"
import User from "../models/Users.js"

export const protect = async(req, res, next) => {
	try{
		const { token } = req.cookies
		if (!token) {
			return res.status(401).json({msg: 'You are not authorized!.'})
		}
		//verify token
		const isTokenVerified = jwt.verify(token, process.env.JWT_SECRET)
		if (!isTokenVerified) {
			return res.status(401).json({msg: 'Your are not authorized.'})
		}
		const user = await User.findById(isTokenVerified.userId).select('-password')
		if (!user) {
			return res.status(401).json({msg: 'User not found.'})
		}
		req.user = user
		next()
	}catch (error) {
		return res.status(401).json({msg: 'User not Authorized, please login.'})
	}
}