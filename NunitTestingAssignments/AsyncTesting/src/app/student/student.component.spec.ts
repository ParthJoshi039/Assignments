import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get Success', async () => {
    var res = await component.get();

    var expected = [
      {Id:1,Name:"Parth",Branch:"Information Technology"},
      {Id:2,Name:"Parth",Branch:"Information Technology"},
      {Id:2,Name:"Parth",Branch:"Information Technology"}
    ];

    expect(res.length==expected.length).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('Add Success', async () => {
    var res = await component.Add( {Id:4,Name:"Parth",Branch:"Information Technology"});
    expect(res = "Added Successfully").toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('Updated Success', async () => {
    var res = await component.Update(1,"Parth Joshi");
    expect(res = "Updated Successfully").toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('Delete Success', async () => {
    var res = await component.Delete(4);
    expect(res = "Deleted Successfully").toBeTruthy();
    expect(component).toBeTruthy();
  });

});
