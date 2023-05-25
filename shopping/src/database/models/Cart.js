const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const cartSchema = new Schema({
    customerId: { type: String },
    item: [{
        product: {
            _id: { type: String, require: true },
            name: { type: String },
            dessc: { type: String },
            banner: { type: String },
            type: { type: String },
            unit: { type: Number },
            price: { type: Number },
            suplier: { type: String }
        },
        unit: { type: Number, require: true }
    }]
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret._v;
        }
    },
    timestamps: true
})

module.exports = mongoos.model('cart', cartSchema);