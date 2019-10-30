import { Model } from 'mongoose'
import { OrderDocument, ProductDocument, UserDocument } from '.'

export interface Models {
  Order: Model<OrderDocument>
  Produt: Model<ProductDocument>
  User: Model<UserDocument>
}
