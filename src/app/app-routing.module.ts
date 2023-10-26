import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './shared/first/first.component';
import { SecondComponent } from './shared/second/second.component';
import { ComponentsPageComponent } from './products/components/components-page/components-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { MyReactiveFormComponent } from './shared/my-reactive-form/my-reactive-form.component';
import { FirstAComponent } from './shared/first-a/first-a.component';
import { FirstBComponent } from './shared/first-b/first-b.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { firstGuard } from './first.guard';
import { LoginComponent } from './shared/login/login.component';
import { ShowRandomUserComponent } from './randomusers/show-random-user/show-random-user.component';

const routes: Routes = [
   { path: 'first', component: FirstComponent,
     children:[
              { path: 'first-a', component: FirstAComponent },
               { path: 'first-b', component: FirstBComponent }
              ]
   },
   { path: 'second', component: SecondComponent, canActivate: [firstGuard] },
   {path: 'products', component: ComponentsPageComponent},
   {path: 'products/:id', component: ProductDetailsComponent} ,
   {path: 'welcome', component: WelcomeComponent},
   {path: 'reactive', component: MyReactiveFormComponent},
   {path: 'login', component: LoginComponent},
   {path: 'randomuser', component: ShowRandomUserComponent},
   {path: '', redirectTo: '/randomuser', pathMatch: 'full'},
   {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
