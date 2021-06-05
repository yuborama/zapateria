import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type Contact {
    name: String
    subject: String
    email: String
    message: String
  }

  #######################INPUT#######################

  input ContactInput {
    name: String!
    subject: String!
    email: String!
    message: String!
  }
`;

export default typeDefs;
