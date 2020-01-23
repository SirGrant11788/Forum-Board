import { Component , OnInit, OnDestroy} from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import {Subscription} from 'rxjs';
@Component({
selector: 'app-post-placed',
templateUrl: './posts-placed.component.html',
styleUrls: ['./posts-placed.component.css']
})
export class PostsPlacedComponent implements OnInit , OnDestroy
{
posts: Post [] = [];
constructor( public postService: PostsService){}
private postsSubscription: Subscription ;
ngOnInit() {
this.postService.getPosts();
this.postsSubscription = this.postService.getPostUpdateListener()
.subscribe((posts: Post[]) =>
{
this.posts = posts;
});
}

onDelete(postID: string )


{
this.postService.deletePost(postID);
}
ngOnDestroy()
{
this.postsSubscription.unsubscribe();
}
}
