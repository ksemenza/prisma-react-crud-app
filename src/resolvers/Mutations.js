// Create a new project, takes a string and a product ID
const createProject = (parent, args, context) => {
    const project = context.prisma.createProject({
      name: args.name
    
    });
  
    return project;
  };

    
  const deleteProject = async (parent, args, context) => {
    const { projectId } = args
    const deletedTag = await context.prisma.deleteTag(args.where)
    .catch((e => {
      console.error(e.message)
    }),

    )
    return deleteTag
  }


  const updateProject = (_, args, context) => {
    const { projectId, name } = args
    const updateProject = context.prisma.updateTag({
      data: args.data,
      where: args.where,
    })
    .catch((e => {
      console.error(e.message)
    }),
    )
    return updateProject
  }
  

//LAB23-T1 CREATE-TAG, UPDATED 5/11/20
const createTag = (parent, args, context) => {
    const { id, name, isUsed } = args.data
    console.log(args.data)
    const tag = context.prisma.createTag(args.data)
    .catch((e => {
      console.error(e.message)
    }),
    console.log(createTag ? `Tag ${name} was added` : `Tag ${name} was not added`)
    )
    console.log(tag);
    return tag
  }
  
  const deleteTag = async (parent, args, context) => {
    const { tagId } = args
    const deletedTag = await context.prisma.deleteTag(args.where)
    .catch((e => {
      console.error(e.message)
    }),

    )
    return deleteTag
  }

  const updateTag = (parent, args, context) => {
    const { tagId, name, isUsed } = args
    const updateTag = context.prisma.updateTag({
      data: args.data,
      where: args.where,
    })
    .catch((e => {
      console.error(e.message)
    }),
    )
    return updateTag
  }
//NOTE MUTATIONS
const createNote = (parent, args, context) => {
    const { id, topic, content, project} = args.data
    console.log(args.data)
    const note = context.prisma.createNote(args.data)
    .catch((e => {
      console.error(e.message)
    }),
    )
    return createNote
  }
  
  const deleteNote = async (parent, args, context) => {
    const { noteId } = args
    const deleteNote = await context.prisma.deleteNote(args.where)
    .catch((e => {
      console.error(e.message)
    }),

    )
    return deleteNote
  }

  const updateNote = (parent, args, context) => {
    const { noteId, topic, content, project } = args
    const updateNote = context.prisma.updateNote({
      data: args.data,
      where: args.where,
    })
    .catch((e => {
      console.error(e.message)
    }),
    )
    return updateNote
  }

  const createProjectTagElement = (parent, args, context) => {
    const {project, tag} = args.data
    const projectTagElement = context.prisma.createProjectTagElement(args.data)
    console.log(projectTagElement)
    return projectTagElement
}

  const deleteProjectTagElement = (parent, args, context) => {
    const { projectTagElementId } = args
    const projectTagElement = context.prisma.deleteProjectTagElement(args.where)
      .catch((e => {
        console.error(e.message)
      }))

    console.log(projectTagElement)
    return projectTagElement
}

  
  module.exports = {
      createProject,
      deleteProject,
      updateProject,
      createTag,
      deleteTag,
      updateTag,
      createNote,
      deleteNote,
      updateNote,
      createProjectTagElement,
      deleteProjectTagElement

    

  }
