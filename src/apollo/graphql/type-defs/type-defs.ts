import { gql } from 'apollo-server-micro';
import tdContact from './tdContact';

const typeDefs = gql`
  ${tdContact}
  type Do {
    id: String
  }
  #######################QUERY#######################
  type Query {
    getDo: [Do]
  }
  #####################MUTACION######################
  type Mutation {
    # Contanct
    newContact(input: ContactInput): String
  }
`;

export default typeDefs;
