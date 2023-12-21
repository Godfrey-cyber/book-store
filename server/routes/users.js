import express from 'express'
import {protect} from '../middleware/authMiddleware.js'
import {registerUser, getUsers, getUser, login, userUpdate, deleteUser, changePassword, forgotPassword} from '../controllers/users.js'

const router = express.Router()

router.post("/register", registerUser)
router.get("/getAllUsers", getUsers)
router.get("/getUser/:id", getUser)
router.post("/login", login)
router.put("/userUpdate", protect, userUpdate)
router.delete("/deleteUser", protect, deleteUser)
router.put("/changePassword", protect, changePassword)
router.patch("/forgot-password", forgotPassword)

export default router