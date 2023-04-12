import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { add_book, get_books , delete_book} from '../queries';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  allBooks:any = []
  constructor(private Apollo : Apollo , private router:Router){}
  ngOnInit(){
    this.getData()
  }
  addBookForm:FormGroup=new FormGroup({
    name: new FormControl(null),
    author: new FormControl(null),
    NumOfPages: new FormControl(null),

  })

  submitForm(addBookForm:any)
  {
     this.addData(addBookForm.value) 
     
  }

  getData()
  {
    this.Apollo.watchQuery({query:get_books}).valueChanges.subscribe((res:any)=>{
      console.log(res.data.books)
      this.allBooks = res.data.books 
    })
  }
  addData(addBookForm:any)
  {
    this.Apollo.mutate({
      mutation: add_book,
      variables: addBookForm}).subscribe((res)=>{
        console.log(res)
        this.getData()
        this.router.navigateByUrl('')

      })
  }
 deleteData(id:any)
  {
    console.log(id)
    this.Apollo.mutate({
      mutation: delete_book,
      variables: {id}}).subscribe((res)=>{
        console.log(res)
        this.getData()
        this.router.navigateByUrl('')

      })
  }
}
