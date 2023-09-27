import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ClassesComponent } from './classes/classes.component';
import { FacilitatorHomeComponent } from './components/facilitator-home/facilitator-home.component';
import { facilitatorsGuard } from './components/guards/facilitators.guard';
import { HomeComponent } from './home/home.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ScChatComponent } from './sc-chat/sc-chat.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AssigmentsComponent } from './assigments/assigments.component';
import { MaterialsComponent } from './materials/materials.component';
import { FacilitatorEventsComponent } from './components/facilitator-events/facilitator-events.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

const routes: Routes = [
  { path: 'testingStuff', component: TestPageComponent },
  /** This Redirect will need to Change! */
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wip', component: InProgressComponent },
  { path: 'home', component: HomeComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'calendar', component: FacilitatorEventsComponent, canActivate: [facilitatorsGuard]},
  { path: 'chat', component: ScChatComponent },
  { path: 'assignments', component: AssigmentsComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'quizzes', component: QuizzesComponent },
  {
    path: 'facilitator-home',
    component: FacilitatorHomeComponent,
    canActivate: [facilitatorsGuard],
  },
  {
    path: 'facilitator-events',
    component: FacilitatorEventsComponent,
    canActivate: [facilitatorsGuard],
  },

  /** Keep these 2 routes LAST to redirect all unknown routes. */
  { path: '404NotFound', component: InProgressComponent },
  { path: '**', redirectTo: '/404NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
