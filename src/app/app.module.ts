import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsPageComponent } from './products/components/components-page/components-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CustomersDataComponent } from './shared/customers-data/customers-data.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MyReactiveFormComponent } from './shared/my-reactive-form/my-reactive-form.component';
import { FirstComponent } from './shared/first/first.component';
import { SecondComponent } from './shared/second/second.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { FirstAComponent } from './shared/first-a/first-a.component';
import { FirstBComponent } from './shared/first-b/first-b.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { LoginComponent } from './shared/login/login.component';
import { FirstInterceptor } from './shared/interceptors/first.interceptor';
import { SecondInterceptor } from './shared/interceptors/second.interceptor';
import { ShowRandomUserComponent } from './randomusers/show-random-user/show-random-user.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsPageComponent,
    MenuComponent,
    CustomersDataComponent,
    FooterComponent,
    MyReactiveFormComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent,
    WelcomeComponent,
    FirstAComponent,
    FirstBComponent,
    ProductDetailsComponent,
    LoginComponent,
    ShowRandomUserComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


