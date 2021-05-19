
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';


import { TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
 


  constructor(
    private todoService:TodoService
    
  ) { }


 
  

  ngOnInit(): void {
    this.getAllTodos();

    
 
    }
  

  addTodo(title: any, describtion: any)
  {
    console.log(title);
      const obj = { "Title": title, "desc": describtion };

    this.todoService.addTodo(obj)
      .subscribe((res: any) => {
        console.log(res);
    },(err: any)=>{
      console.log(err);
    });
    }
  todoList: any;
  todoId:any;
  getAllTodos(){
       this.todoService.getAllTodos()
         .subscribe(res => {
           console.log(res);
           this.todoList=res["results"];
           
           
           
           
         },
       (err)=>{
       console.log(err);
       });
     }



     todoid:any;
     removeTodo(id: any){
       this.todoid=id.value;
       
      this.todoService.removeTodo(this.todoid)
      .subscribe(res=>{
        console.log(id);
        this.getAllTodos();
        
      },err=>{
        console.log(err);
        this.getAllTodos();
      });
      
     }
     
 
    
  }
   
    



function next(next: any, arg1: (res: any) => void, error: any, arg3: (err: any) => void) {
  throw new Error('Function not implemented.');
}

