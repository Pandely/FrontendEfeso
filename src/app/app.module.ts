import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';



// Animations
import {BrowserAnimationsModule} from 
'@angular/platform-browser/animations';

// Material
import {MaterialModule} from './material';
import { ReportComponent } from './components/report/report.component';
//Services
import { DataApiService } from "src/app/services/data-api.service";
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    ReportComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

    
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
