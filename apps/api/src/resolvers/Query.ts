import { Resolver, ProductByIdInput } from '../types'
import { checkExistence } from '../utils'

const products: Resolver<{}> = (_, args, { models }) => models.Product.find()

const product: Resolver<ProductByIdInput> = async (_, args, { models }) => {
  const { Product } = models
  const { _id } = args
  await checkExistence({
    models,
    model: 'Product',
    field: '_id',
    value: _id,
  })
  return Product.findById(_id)
}

export default {
  products,
  product,
}
