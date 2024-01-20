import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
	image: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	productId: {
		type: [String]
	},
	// productId: {
	//     type: mongoose.Schema.Types.ObjectId,
	//     ref: 'Product',
	//     required: false
 //  	},
}, { timestamps: true }, { autoIndex: false })

CategorySchema.index({ '$**': 'text' })

export default mongoose.model('Category', CategorySchema);