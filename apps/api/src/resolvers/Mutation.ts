import { Resolver, ProductCreateInput } from '../types'

const createProduct: Resolver<ProductCreateInput> = (_, args, { models }) => {
  const { Product } = models
  const { data } = args
  const product = new Product(data)
  return product.save()
}

export default {
  createProduct,
}
