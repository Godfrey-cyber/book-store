import axios from "axios"
import { useSelector } from "react-redux"
import { selectUser } from ".../Redux/Slices/userSlice.js"

const user = useSelector(selectUser)
export const userRequest = axios.create({
	baseURL: "http://localhost:5000/api/v1",
	header: { token: TOKEN },
	Authorization: user.token
})