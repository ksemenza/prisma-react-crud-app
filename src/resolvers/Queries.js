
//PROJECT QUERIES
const projects = (parent, args, context) => {
    const res = context.prisma.projects(args);
    return res;
  };
    
  const project = (parent, args, context) => {
    const { where } = args;
    console.log(args.where.projectId)
    const res = context.prisma.project(where);
    return res;
  };

  //TAG QUERIES
  const tags = (parent, args, context) => {
    const res = context.prisma.tags()
    return res
  };
  
  const tag = (parent, args, context) => {
    const { where } = args
    const res = context.prisma.tag(where)
    return res
  };
  
  //NOTE QUERIES
  const notes = (parent, args, context) => {
    const res = context.prisma.notes()
    return res
  };
  
  const note = (parent, args, context) => {
    const { where } = args
    const res = context.prisma.note(where)
    return res
  };

//PROJECT TAG ELEMENTS QUERIES
  const projectTagElements = (parent, args, context) => {
    const res = context.prisma.projectTagElements()
    return res
  };
  
  const projectTagElement = (parent, args, context) => {
    const { where } = args
    const res = context.prisma.projectTagElement(where)
    return res
  };

  module.exports = {
      project,
      projects,
      tag,
      tags,
      note,
      notes
  }
