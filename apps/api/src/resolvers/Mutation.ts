import {
  Resolver,
  ProductCreateInput,
  Product,
  ProductDeleteInput,
} from '../types'

const createProduct: Resolver<ProductCreateInput> = (_, args, { models }) => {
  const { Product } = models
  const { data } = args
  const product = new Product(data)
  return product.save()
}

const deleteProduct: Resolver<ProductDeleteInput> = (_, args, { models }) => {
  const { Product } = models
  const { _id } = args
  return Product.findByIdAndDelete(_id).exec()
}

export default {
  createProduct,
  deleteProduct,
}
