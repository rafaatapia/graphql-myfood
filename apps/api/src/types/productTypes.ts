import { Document, Schema } from 'mongoose'
import { OmitID } from '.'

export interface Product {
  _id: Schema.Types.ObjectId
  name: string
  description: string
  price: number
  unit: string
}

export interface ProductDocument extends Product, Document {
  _id: Schema.Types.ObjectId
}

export interface ProductCreateInput {
  data: OmitID<Product>
}

export interface ProductByIdInput {
  _id: Schema.Types.ObjectId
}

export interface ProductUpdateInput extends ProductCreateInput, ProductByIdInput {}
}
