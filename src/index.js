// const { prisma } = require('./generated/prisma-client')
// const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')
const context = require('./context')
const { importSchema } = require('graphql-import')
const {ApolloServer, gql} = require('apollo-server')

const PORT = process.env.PORT || 9000

const typeDefs = gql(importSchema('./apollo/apollo.graphql'))
(async ()=> {
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        context,
    
        formatError: err => {
            console.log('%0', err)
            console.log('%0', err.extensions)
    
            return err
        }
    })    
    
const {url} = await server.listen(PORT)
console.log(`<=======RUNNING ON ${url}========>`)

// server.start(() => console.log('Server is running on http://localhost:9000'))
})()

