import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import { rateLimit } from 'express-rate-limit'
// routes
import userRoutes from './routes/users.js'
import bookRoutes from './routes/books.js'
import categoryRoutes from './routes/category.js'

dotenv.config()
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
	origin: process.env.CLIENT_URL,
	credentials: true
}))

// Apply the rate limiting middleware to all requests.
app.use(limiter)

// connection to the mongodb
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 5000

// mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, () => console.log(`Success 💯! Database running on port: ${PORT} 👍`))).catch(error => console.log(error))
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("disconnected", (error) => {
    console.log("❌ MongoDatabase disconnected❗", error)
});

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/books', bookRoutes)
app.use('/api/v1/categories', categoryRoutes)

app.listen(PORT, () => {
    console.log(`Success 💯! Database running on port: ${PORT} 👍`)
})