import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  student = [
    {Id:1,Name:"Parth",Branch:"Information Technology"},
    {Id:2,Name:"Parth",Branch:"Information Technology"},
    {Id:2,Name:"Parth",Branch:"Information Technology"}
  ];
  
  ngOnInit(): void {
  }

  async get() 
  {
    return this.student;
  }

  async Add(data:any)
  {
    this.student.push(data);
    return "Added Successfully";
  }

  async Update(id:number,name:string)
  {
    var i = this.student.findIndex(x => x.Id == id)
    this.student[i].Name=name;
    return "Updated Successfully";
  }

  async Delete(id:number)
  {
    this.student = this.student.filter(x=>x.Id != id)
    return "Deleted Successfully";
  }

}
