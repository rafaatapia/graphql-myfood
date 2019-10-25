import { GraphQLServer } from "graphql-yoga";
import { resolve } from "path";

const typeDefs = resolve(__dirname, "schema.graphql");
const USERS = [
  { id: 1, name: "Tony Stark", email: "stark@avengers.com" },
  { id: 2, name: "Spider Man", email: "spider@avengers.com" }
];

const resolvers = {
  User: {
    name: parent => {
      console.log("Parent: ", parent);
      return "User: " + parent.name;
    }
  },
  Query: {
    users: () => USERS
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => {
      console.log("args: ", args);
      const { data } = args;
      const user = {
        ...data,
        id: USERS.length + 1
      };
      USERS.push(user);
      return user;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

export default server;
