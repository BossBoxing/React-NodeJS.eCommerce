const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter a product name"]
        },
        category: {
            type: String,
            required: [true, "Please Enter a product category"]
        },
        price: {
            type: Number,
            required: [true, "Please Enter a product price"],
            default: 0
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Products', productSchema);

module.exports = Product;