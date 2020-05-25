const name = (parent, _, context) => {
    const projectName = context.prisma.project({ projectId: parent.projectId }).name()
      return projectName
    }


    const tags = (parent, _, context) => {
        const projectTag = context.prisma.project({projectId: parent.projectId}).tags()
        return projectTag
    }

  module.exports = {
    name,
    tags
  }