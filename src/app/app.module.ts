import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Row2Component } from './row2/row2.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { Sec1Component } from './about/sec1/sec1.component';
import { Sec2Component } from './about/sec2/sec2.component';
import { Sec3Component } from './about/sec3/sec3.component';
import { Sec4Component } from './about/sec4/sec4.component';
import { ViewComponent } from './view/view.component';
import { ItemComponent } from './item/item.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Row2Component,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    AboutComponent,
    HomeComponent,
    ContactusComponent,
    FooterComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    Sec4Component,
    ViewComponent,
    ItemComponent,
    ErrorComponent,
    C1Component,
    C2Component,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
