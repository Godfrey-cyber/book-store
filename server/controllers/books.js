import Book from "../models/Books.js"

// CREATE A NEW BOOK
export const createBook = async(req, res) => {
	const { title, desc, price, photo, inStock, discount, catId, condition, userId, author } = req.body
	console.log(req.body)
	try {
		const book = await Book.create({ title, desc, price, photo, inStock, discount, catId, condition, userId: req.user._id, author })
        return res.status(201).json({data: book, status: 'Success' })
	} catch (error) {
		console.log(error)
        return res.status(500).json(error)
    }
}

// GET A BOOK
export const getBook = async(req, res)=> {
	try {
		const book = await Book.findById(req.params.id)
		return res.status(200).json({ data: book, status: 'Success'})
	} catch (error) {
		return res.status(401).json(error)
	}
}

// GET ALL BOOKS
export const getAllBooks = async(req, res) => {
	try {
		const books = await Book.find()
		return res.status(200).json({ data: books, status: "Success", count: books.length })
	} catch (error) {
		return res.status(401).json(error)
	}
}
// UPDATE BOOK
export const updateBook = async(req, res) => {
	try {
		// return res.status(200).json({data: await Book.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})})
		const updatedBook = await Book.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
		return res.status(200).json({ data: updatedBook })
	} catch (error) {
		return res.status(401).json(error)
	}
}

// DELETE A BOOK
export const deleteBook = async(req, res) => {
	try {
		const deleteBook = await Book.findByIdAndDelete(req.params.id)
		return res.status(200).json({ status: 'success', msg: "Book deleted successfully" })
	} catch(error) {
		return res.status(401).json(error)
	}
}