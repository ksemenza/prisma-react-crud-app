const name = (parent, _, context) => {
    const tagName = context.prisma.tag({ tagId: parent.tagId }).name()
      return tagName
    }


    const isUsed = (parent, _, context) => {
        const tagIsUsed = context.prisma.tag({tagId: parent.tagId}).isUsed()
        return tagIsUsed
    }

    const projects = ( parent, args, context) => {
      const tagProjects = context.prisma.tag({tagId: parent.tagId}).projects()
      return tagProjects
    }

  module.exports = {
    name,
    isUsed,
    projects
  }