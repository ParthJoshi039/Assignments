import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PostDataService } from './post-data.service';
import { Post } from '../model/post.models';
import { doesNotReject } from 'assert';

describe('PostDataService', () => {
  let service: PostDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PostDataService]
    });
    service = TestBed.inject(PostDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data form the api', async() => {
    const dummyData: Post[] = [{
      userId: '1',
      id: 1,
      body: 'Hello World',
      title: 'Testing Angular'
    },
    {
      userId: '2',
      id: 2,
      body: 'Hello World',
      title: 'Testing Angular 2'
    }
  ];

   (await service.getPostData()).subscribe(posts => {
    expect(posts.length).toBe(2);
    expect(posts).toEqual(dummyData);
    console.log(dummyData)
  });

  const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts')
  expect(request.request.method).toBe('GET');
  request.flush(dummyData);
  });

  it('should call getPostData Success', () => {
    service.getPostData().then((data)=>{
      expect(data).toBeTruthy();
    });
  });

  it('should call Add Success', () => {
    service.Add(6).then((data)=>{
      expect(data).toBeTruthy();
    });
  });

  it('should call Update Success', () => {
    service.update().then((data)=>{
      expect(data).toBeTruthy();
    });
  });

  it('should call Delete Success', () => {
    service.deletepost(5).then((data)=>{
      expect(data).toBeTruthy();
    });
  });
  
});
