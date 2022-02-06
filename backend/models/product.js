const mongoose = require('mongoose');
const { stringify } = require('querystring');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Ral-Time-Strategy(RTS)',
                'Multiplayer online battle arena(MOBA)',
                'Role-playing(RPG)',
                'Puzzlers and party games',
                'Action-adventure games',
                'Shooters(FPS and TPS)',
                'Sports games',
                'Horror',
                'Vintage collection'
            ],
            message: 'Please select correct category for product'
        }
    },
})

module.exports = mongoose.model('product', productSchema);