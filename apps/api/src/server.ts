import { GraphQLServer } from 'graphql-yoga'
import { resolve } from 'path'
import { models } from './models'
import resolvers from './resolvers'

const typeDefs = resolve(__dirname, 'schema.graphql')

const server = new GraphQLServer({
  resolvers,
  typeDefs,
  context: { models },
})

export default server
