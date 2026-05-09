import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../Model/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
private baseApi:string="http://localhost:3000/student";

constructor(private http:HttpClient){}

// Get Request

getAllStudent():Observable<StudentModel[]>{
  
return this.http.get<StudentModel[]>(this.baseApi);

}

// post Request

saveStudent(student : StudentModel){
return this.http.post<StudentModel>(this.baseApi,student);

}


}