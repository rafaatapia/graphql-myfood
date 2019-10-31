import {
  Resolver,
  ProductCreateInput,
  ProductUpdateInput,
  ProductDeleteInput,
} from '../types'
import { checkExistence } from '../utils'

const createProduct: Resolver<ProductCreateInput> = (_, args, { models }) => {
  const { Product } = models
  const { data } = args
  const product = new Product(data)

  return product.save()
}

const updateProduct: Resolver<ProductUpdateInput> = async (
  _,
  args,
  { models },
) => {
  const { Product } = models
  const { _id, data } = args
  await checkExistence({
    models,
    model: 'Product',
    field: '_id',
    value: _id,
  })
  return Product.findByIdAndUpdate(_id, data, { new: true })
}

const deleteProduct: Resolver<ProductDeleteInput> = async (
  _,
  args,
  { models },
) => {
  const { Product } = models
  const { _id } = args
  await checkExistence({
    models,
    model: 'Product',
    field: '_id',
    value: _id,
  })
  return Product.findByIdAndDelete(_id).exec()
}

export default {
  createProduct,
  updateProduct,
  deleteProduct,
}
