import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
{path: '', redirectTo: 'students', pathMatch: 'full'},
{path: 'students', component:StudentListComponent},
{path: 'students/:id', component:StudentDetailsComponent},
{path: 'create', component:StudentCreateComponent},

]

@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    StudentCreateComponent,
    StudentDetailsComponent,
    StudentListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
