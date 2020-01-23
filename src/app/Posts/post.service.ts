import { Post} from './post.model';
import { Injectable } from '@angular/core';
import {Subject, from} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
declare function require(name:string);
import * as vars from '../../../backend/routes/user';
// import {var1} from  '../../../backend/routes/user';
// const us =  vars.var1;
// let us = var1;


@Injectable({providedIn: 'root'})

export class PostsService
{

private posts: Post [] = [] ;
private updatedPosts = new Subject<Post[]>();
constructor(private http: HttpClient){};

getPosts()
{
this.http.get<{message: string, posts: any}>('https://localhost:3000/api/posts/')
.pipe(map((postData)=>
{
return postData.posts.map(post=>{
return {
userName: post.userName,
Title: post.Title,
PlacedPost: post.PlacedPost,
id: post._id
};
});

}))
.subscribe((PostInfo)=>
{
  this.posts = PostInfo;
  // console.log(PostInfo)






//  console.log('username check:!  '+'usname')
//   const updatedPostsGet = this.posts.filter(post =>post.userName == 'user1111');
//   // this.posts= updatedPostsDel;
//   // console.log(updatedPostsDel)

//   console.log(updatedPostsGet)
//   console.log(PostInfo)

//   this.posts = updatedPostsGet;



  this.updatedPosts.next([...this.posts]);
  // this.posts = updatedPostsDel;
});
}
getPostUpdateListener()
{
return this.updatedPosts.asObservable();
}
addPosts(userName: string , Title: string , PlacedPost: string )
{
const post: Post = {id :null, userName : userName , Title: Title, PlacedPost: PlacedPost};
this.http.post<{message: string, postId: string} >('https://localhost:3000/api/posts',post)
.subscribe((responsePostData)=>{
console.log(responsePostData.message);
const id = responsePostData.postId;
post.id= id;
this.posts.push(post);
this.updatedPosts.next([...this.posts]);
});
}
deletePost(postID: string)
{

this.http.delete('https://localhost:3000/api/posts/' + postID)
.subscribe(()=>
{

const updatedPostsDel = this.posts.filter(post =>post.id!== postID);
this.posts= updatedPostsDel;
this.updatedPosts.next([...this.posts]);
console.log('Post Deletedddd');
});
}
savefile()
{
}
}
