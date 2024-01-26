import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { createBook, getBook, getAllBooks, updateBook, deleteBook, booksByCategory } from '../controllers/books.js'

const router = express.Router()

router.post("/create-book", createBook)
router.get("/getBook/:id", getBook)
router.get("/getAllBooks", getAllBooks)
router.get("/books-by-category/:id", booksByCategory)
router.put("/update-book/:id", protect, updateBook)
router.delete("/delete-book/:id", protect, deleteBook)

export default router