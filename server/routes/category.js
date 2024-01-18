import express from 'express'
import { createCategory, getAllCategories, getCategory, updateCategory, deleteCategory } from "../controllers/category.js"
import { protect } from "../middleware/authMiddleware.js" // Authentication middleware

const router = express.Router()

router.post("/create-category", protect, createCategory) // creating a category
router.get("/get-categories", getAllCategories) // getting all categories
router.get("/get-category/:id", getCategory) // getting single category
router.put("/update-category/:id", protect, updateCategory) // update category
router.delete("/delete-category/:id", protect, deleteCategory) // delete category

export default router

// :~:~:~:~:~:~:~:~:~:~:~:~:~::~:~::-
// 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
