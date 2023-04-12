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

const add_book = gql`
mutation ($name: String! , $author: String! , $NumOfPages: String!) {
  AddBook(name: $name , author:$author , NumOfPages:$NumOfPages) {
    name
    author
    NumOfPages
  }
}
`;

const delete_book = gql`
mutation ($id: String! ) {
  deleteBook(id: $id ) {
    id
  }
}
`;
export {get_books , add_book , delete_book}


/*
mutation{
  deleteBook(id:"6434d2d9ae7c7e43ef8120bf")
  {
    id

  }
  }


mutation{
  AddBook(name:"c++",author:"ahmed",NumOfPages:"40")
  {
    name,
author,
NumOfPages

  }
  }


mutation{
  UpdateBook(id:"6434d5f099ed47b4c4f2a8ab",name:"c++++++",author:"ahmeasdasdd",NumOfPages:"46454560")
  {
    name,
author,
NumOfPages,
    id

  }
  }




mutation{
  AddAuthor(name:"zzzzzz" ,age:30 ,books:["6434db79a508c46278c5830b"] )
  {
    name,
age,
books
    {
      name,
      author
    }

  }
  }



mutation{
  UpdateAuthor(id:"6434dd591affb137133ed020",name:"xxxx" ,age:30 ,books:["asdasd"] )
  {
    name,
age,
books{
id
}
  
  }
  }



mutation{
 deleteAuthor(id:"6434dd591affb137133ed020" )
  {
    
		name,
    age,
  }
  }
*/ 