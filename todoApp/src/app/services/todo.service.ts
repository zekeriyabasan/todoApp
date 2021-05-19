import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
   

    private http:HttpClient
  ) { }

  addTodo(obj: { "Title": any; "desc": any; }){
    return this.http.post('http://localhost:5000/addTodo',obj);
  }

  getAllTodos(): Observable<any>{
    return this.http.get('http://localhost:5000/getTodos');

  }
  updateTodo(id: any, obj: any):Observable<any>{
    return this.http.put('http://localhost:5000/updateTodo/'+id, obj); // {"Title":"Update","desc":"update desc"}

  }
  removeTodo(id: any){
    return this.http.delete('http://localhost:5000/deleteTodo/'+id);


  }
}
