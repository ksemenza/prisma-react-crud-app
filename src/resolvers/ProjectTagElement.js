const project = (parent, _, context) => {
    const projectTagElementProject = context.prisma.projectTagElement({ projectTagElementId: parent.projectTagElementId }).project();
    return projectTagElementProject
  };

  const tag = (parent, _, context) => {
    const projectTagElementTag = context.prisma.projectTagElement({ projectTagElementId: parent.projectTagElementId }).tag();
    return projectTagElementTag
  };
  
  module.exports = {
    project,
    tag
  };