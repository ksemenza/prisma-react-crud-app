const topic = (parent, _, context) => {
    const noteTopic = context.prisma.note({ noteId: parent.noteId }).topic()
      return noteTopic
    }


    const content = (parent, _, context) => {
        const noteContent = context.prisma.note({noteId: parent.noteId}).content()
        return noteContent
    }

    const projects = (parent, _, context) => {
        const noteProjects = context.prisma.note({noteId: parent.noteId}).projects()
        return noteProjects
    }

  module.exports = {
    topic,
    content,
    projects
  }