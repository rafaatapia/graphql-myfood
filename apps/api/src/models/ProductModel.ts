import { Schema, model } from 'mongoose'
import { ProductDocument } from '../types'

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  price: {
    type: Number,
    required: false,
  },
  unit: {
    type: String,
    enum: ['UN', 'LT', 'GR', 'KG'],
    required: true,
  },
})

export default model<ProductDocument>('Product', productSchema)
