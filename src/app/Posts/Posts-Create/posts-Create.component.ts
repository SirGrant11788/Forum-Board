import { Component, Sanitizer, SecurityContext } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
selector:'app-post-create',
templateUrl:'./posts-create.component.html',
styleUrls:['./posts-create.component.css']
})
export class PostCreateComponent
{
enteredUserNameError = 'Please enter a user name in the correct form';
enteredTitleError = 'Enter a Title of atleast 5 characters ';
enteredPostError = '<Please enter an post of no more than 100 characters';
output: string;
constructor(public postService: PostsService, public route: ActivatedRoute,
protected sanitizer: DomSanitizer){}
onAddPost(Postform: NgForm)
{
if (Postform.invalid)
{
return;
}
//var id=vars;
this.postService.addPosts('vars', Postform.value.enteredTitle
, Postform.value.enteredPost);
this.output = (this.sanitizer.sanitize(SecurityContext.HTML, Postform.value.enteredPost) );
Postform.resetForm();
}
}
