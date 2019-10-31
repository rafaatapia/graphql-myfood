import {
  Resolver,
  ProductCreateInput,
  ProductUpdateInput,
  ProductDeleteInput,
} from '../types'

const createProduct: Resolver<ProductCreateInput> = (_, args, { models }) => {
  const { Product } = models
  const { data } = args
  const product = new Product(data)
  return product.save()
}

const updateProduct: Resolver<ProductUpdateInput> = (_, args, { models }) => {
  const { Product } = models
  const { _id, data } = args
  return Product.findByIdAndUpdate(_id, data, { new: true })
}

const deleteProduct: Resolver<ProductDeleteInput> = (_, args, { models }) => {
  const { Product } = models
  const { _id } = args
  return Product.findByIdAndDelete(_id).exec()
}

export default {
  createProduct,
  updateProduct,
  deleteProduct,
}
