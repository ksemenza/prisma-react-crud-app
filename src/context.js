'use strict'

const { prisma } = ('./generated/prisma-client')

function Context (user, prisma) {
    this.user = user
    this.prisma = prisma
}

function User(id, name, email) {
    this.id = id
    this.name = name
    this.email = email
}

const context = async({req}) => {
    return new Context(prisma, user)
}

module.exports = context