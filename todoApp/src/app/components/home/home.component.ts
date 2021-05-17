import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pendings = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  inProgress = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
    'ZEK TEST'
  ];

  constructor(
    
  ) { }

  ngOnInit(): void {
 
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

    addTodo(todo: { value: string; }){
      this.pendings.push(todo.value);
      todo.value='';

    }

   
    
    
    
  }

  
    
  

  
    
  
  
  
  


function next(next: any, arg1: (res: any) => void, error: any, arg3: (err: any) => void) {
  throw new Error('Function not implemented.');
}

