import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './Posts/Posts-Create/posts-Create.component';
import { PostsPlacedComponent } from './posts/posts-placed/posts-placed.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/signup/signup.component';
const routes: Routes = [
{path: '', component: PostsPlacedComponent},
{path: 'create', component: PostCreateComponent},
{path: 'edit/:postId', component: PostCreateComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignUpComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
