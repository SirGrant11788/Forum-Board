import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule ,
MatCardModule,
MatButtonModule,
MatExpansionModule,
MatDialogModule} from '@angular/material';
import { PostCreateComponent } from './Posts/Posts-Create/posts-Create.component';
import { PostsPlacedComponent} from './posts/posts-placed/posts-placed.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import {ErrorComponent} from './Auth/error/error.component';
import { SignUpComponent } from './Auth/signup/signup.component';
import { AuthInterceptor } from './Auth/auth-interceptor';
import { ErrorInterceptor } from './Auth/error/error.interceptor';
@NgModule({
declarations: [
AppComponent,
PostCreateComponent,
PostsPlacedComponent,
LoginComponent,
SignUpComponent,
ErrorComponent
],
imports: [
BrowserModule,
AppRoutingModule,
BrowserAnimationsModule,
FormsModule,
MatInputModule,
MatCardModule,
MatButtonModule,
MatExpansionModule,
HttpClientModule,
MatDialogModule
],
providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
],
bootstrap: [AppComponent],
entryComponents: [ErrorComponent]
})
export class AppModule { }
