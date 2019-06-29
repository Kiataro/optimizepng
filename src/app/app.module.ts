import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {DataService} from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadsComponent } from './components/uploads/uploads.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import {TooltipModule} from 'ngx-bootstrap';
import {ProgressbarModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MainComponent,
    UploadsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    TooltipModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
