import { NOTE_FRAGMENT } from './fragments';

export const defaults = {
  notes: [
    {
      __typeNmae: 'Note',
      id: 1,
      title: 'First',
      content: 'Content'
    }
  ]
};
export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    notes: [Note]!
    note(id: Int!): Note
  }
  tpye Mutation {
    createNote(title: String!, content: String!): Note
    editNote(id:Int!, title:String, content: String): Note
  }
  type Note {
    id: Int!
    title: String!
    content: String!
  }
  `
];
export const resolvers = {
  Query: {
    note: (_, variables, { cache }) => {
      const id = cache.config.dataIdFromObject({
        __typeNmae: 'Note',
        id: variables.id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT });
      return note;
    }
  }
};
