import express from 'express'
import { createCategory, getAllCategories, getCategory, updateCategory, deleteCategory } from "../controllers/category.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/create-category", protect, createCategory) // creating a category
router.get("/get-categories", getAllCategories) // getting all categories
router.get("/get-category/:id", getCategory) // getting single category
router.put("/update-category/:id", protect, updateCategory) // update category
router.delete("/delete-category/:id", protect, deleteCategory) // delete category

export default router

// :~:~:~:~:~:~:~:~:~:~:~:~:~::~:~::-
// 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