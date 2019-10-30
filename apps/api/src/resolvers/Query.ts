import { Resolver } from '../types'

const products: Resolver<{}> = (_, args, ctx) => ctx.models.Product.find()

export default {
  products,
}
