import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { Details1Component } from './details1/details1.component';
import { PostsComponent } from './posts/posts.component';



const routes: Routes = [

{
	path:'',
	component:UsersComponent
},

{
	path: 'details',
	component: DetailsComponent
},
{
	path: 'posts',
	component: PostsComponent
},
{
	path: 'details1',
	component: Details1Component
},
{
	path: 'details2',
	component: Details1Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

