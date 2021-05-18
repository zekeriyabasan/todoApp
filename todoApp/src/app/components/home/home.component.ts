import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


 
  data = {
    pendings:
      ["spor"],
    inProgress:
      ["yemek"],
    done:
      ["İş"]
  }

  constructor(
    private todoService:TodoService
    
  ) { }

  ngOnInit(): void {
    //this.getAllTodos();

    
 
    }
    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);

                          
      }
    }

    addTodo(title: any,describtion: any)
    {
    const obj = {Title:title.value,desc:describtion.value};
    this.todoService.addTodo(obj)
    .subscribe((res: any)=>{
      console.log(res);
    },(err: any)=>{
      console.log(err);
    });
    }

    // getAllTodos(){
    //   this.todoService.getAllTodos()
    //   .subscribe((res)=>{
    //     Object.keys(res).forEach((key)=>{
          
    //        return this.data;
    //     })
    //   },(err)=>{
    //   console.log(err);
    //   });
    // }
 
    
  }
   
    



function next(next: any, arg1: (res: any) => void, error: any, arg3: (err: any) => void) {
  throw new Error('Function not implemented.');
}

