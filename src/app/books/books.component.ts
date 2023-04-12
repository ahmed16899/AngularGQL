import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { get_books } from '../queries';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  allBooks:any = []
  constructor(private Apollo : Apollo){}
  ngOnInit(){
    this.Apollo.watchQuery({query:get_books}).valueChanges.subscribe((res:any)=>{
      console.log(res.data.books)
      this.allBooks = res.data.books 
    })
  }
}
