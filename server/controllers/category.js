import Category from "../models/Category.js"

//CREATE CATEGORY
export const createCategory = async(req, res) => {
	const { image, title, desc, productId  } = req.body
	if (!title || !image || !desc) {
		return res.status(400).json("❌ Please enter all fiedls❗")
	}
	try {
		const category = await Category.create({ image, title, desc, productId })
		return res.status(201).json({ data: category, status: "Success" })
	} catch (error) {
		return res.status(401).json(error)
	}
}

//GET ALL CATEGORIES
export const getAllCategories = async(req, res) => {
	const searchTerm = req.query.q
	console.log(searchTerm)
	try {
		const categories = searchTerm ? await Category.find({ $text: { $search: searchTerm } }) : await Category.find()
		return res.status(200).json({ data: categories, status: "Success", count: categories.length })
	} catch (error) {
		return res.status(401).json(error)
	}
}
//GET CATEGORY
export const getCategory = async(req, res) => {
	try {
		const category = await Category.findById(req.params.id)
		return res.status(200).json({ data: category, status: "Success" })
	} catch (error) {
		return res.status(401).json(error)
	}
}
//UPDATE CATEGORY
export const updateCategory = async(req, res) => {
	try {
		const updatedCategory = await Category.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
		console.log(updatedCategory)
		return res.status(200).json({ data: updatedCategory, status: "Success" })
	} catch (error) {
		return res.status(401).json(error)
	}
}
//DELETE CATEGORY 
export const deleteCategory = async(req, res) => {
	try {
		const deleteCategory = await Category.findByIdAndDelete(req.params.id)
		return res.status(200).json({ msg: "Category successfully deleted", status: "Success" })
	} catch (error) {
		return res.status(401).json(error)
	}
}