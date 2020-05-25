const Queries = require('./Queries')
const Mutations = require('./Mutations')
const Project = require('./Project')
const Tag = require('./Tag')
const Note = require('./Note')
const User = require('./User')
const ProjectTagElement = require('./ProjectTagElement')

const resolvers ={
    Queries,
    Mutations,
    Project,
    Tag,
    Note,
    User, 
    ProjectTagElement
}

module.exports = resolvers