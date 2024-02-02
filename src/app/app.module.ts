import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableEditComponent } from './shared/table-edit/table-edit.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TableEditService } from './shared/table-edit/tableEdit.service';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TableEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TableEditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
