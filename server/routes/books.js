import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { createBook, getBook, getAllBooks, updateBook, deleteBook } from '../controllers/books.js'

const router = express.Router()

router.post("/create-book", protect, createBook)
router.get("/getBook/:id", getBook)
router.get("/getAllBooks", getAllBooks)
router.put("/update-book/:id", protect, updateBook)
router.delete("/delete-book/:id", protect, deleteBook)

export default router