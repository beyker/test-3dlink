import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyListComponent } from './my-list/my-list.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { CompanyComponent } from './company/company.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CountTextComponent } from './count-text/count-text.component';
import { MatTableModule } from '@angular/material/table';
import { UserTableComponent } from './user-table/user-table.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CommonModule } from '@angular/common'



@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    CompanyComponent,
    CountTextComponent,
    UserTableComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
