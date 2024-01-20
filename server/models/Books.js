import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
	title: { 
		type: String, unique: true, required: [true, "A Book must have a title"]
	 },
	desc: { 
		type: String, required: [true, "A Book must have a description"] 
	},
	author: { 
		type: String, required: [true, "A Book must have an author"] 
	},
	photo: { 
		type: String,
		default: "https://sky.garden/assets/loading-spinners.svg"
	},
	pages: { 
		type: Number, required: true
	},
	year: {
		type: Number, reqired: true
	},
	condition: {
		type: String, required: true, default: 'New'
	},
	review: { 
		type: mongoose.Schema.ObjectId, 
		ref: "Review"
	},
	inStock: { 
		type: Number, required: [true, "A Book must have a quantity"], default: 1
	},
	isbn: {
		type: Number, 
	},
	price: { 
		type: Number, required: [true, "A Book must have a price"]
	},
	discount: { 
		type: Number, default: 0,
	},
	userId: { 
		type: mongoose.Schema.ObjectId, ref: "User", 
		required: [true, "A Book must belong to a user"] 
	},
	catId: { 
		type: mongoose.Schema.ObjectId, 
		ref: "Category", required: [true, "A Book must belong to a Category"] 
	}
}, { timestamps: true } )

BookSchema.index({ '$**': 'text' })

export default mongoose.model('Book', BookSchema);



// Above all, trust in the slow work of God. We are quite naturally impatient in everything to reach the end without delay. We should like to skip the intermediate stages. We are impatient of being on the way to something unknown, something new. And yet it is the law of all progress that it is made by passing through some stages of instability— and that it may take a very long time. And so I think it is with you; your ideas mature gradually—let them grow, let them shape themselves, without undue haste. Don’t try to force them on, as though you could be today what time (that is to say, grace and circumstances acting on your own good will) will make of you tomorrow. Only God could say what this new spirit gradually forming within you will be. Give Our Lord the benefit of believing that his hand is leading you, and accept the anxiety of feeling yourself in suspense and incomplete. (less) ”
// ― Pierre Teilhard de Chardin