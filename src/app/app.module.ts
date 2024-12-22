import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { PinListComponent } from './pins/pin-list/pin-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CustomerListComponent, PinListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
