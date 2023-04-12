import { gql } from "apollo-angular";
const get_books = gql`
{
    books
    { 
      id
          name
      author
      NumOfPages
    }
  }
`
export {get_books}