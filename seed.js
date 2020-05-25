
const faker = require('faker');
const { prisma } = require('./src/generated/prisma-client');


//LAB23-T1
const TAGS = [
    'Apollo',
    'React',
    'GraphQL',
    'Postgress',
    'Prisma',
    'Redux',
    'useContext',
    'React-Native',
    'Vue',
    'MongoDB',
    'Java',
    'Data Science',
  ]
const PROJECTS = [
    'Project Alpha',
    'Project Beta',
    'Project Smile',
    'Project Penguin',
    'Project Amber',
    'Project Sunshine',
    'Project Amazon',
  ]

  const seed = async () => {
        /**
   * ====================================================================
   *  Create the tags
   * ====================================================================
   */
  /** @type {import('./src/generated/prisma-client').Tag[]} */
  const tags = [];
  for (let i = 0; i < TAGS.length; i += 1) {
    tags.push(
      await prisma.createTag({
        name: TAGS[i],
      }),
    );
  }

        /**
   * ====================================================================
   *  Create the projects
   * ====================================================================
   */
  /** @type {import('./src/generated/prisma-client').Project[]} */
  const projects = [];
  for (let i = 0; i < PROJECTS.length; i += 1) {
    projects.push(
      await prisma.createProject({
        name: PROJECTS[i],
      }),
    );
  }
  }
  
  seed().catch(e => console.error(e));