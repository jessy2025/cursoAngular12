import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialFormComponent } from './route/angular-material-form/angular-material-form.component';
import { DirectiveExerciseComponent } from './route/directive-exercise/directive-exercise.component';
import { DirectivesComponent } from './route/directives/directives.component';
import { FirstComponent } from './route/first/first.component';
import { OrchestationPersonExerciceComponent } from './route/orchestation-person-exercice/orchestation-person-exercice.component';
import { OrchestrationComponent } from './route/orchestration/orchestration.component';
import { PhotoAlbumHttpComponent } from './route/photo-album-http/photo-album-http.component';
import { ReactiveFormExampleComponent } from './route/reactive-form-example/reactive-form-example.component';
import { SecondComponent } from './route/second/second.component';
import { TaskManagementComponent } from './route/task-management/task-management.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'directive-exercise', component: DirectiveExerciseComponent },
  { path: 'orchestation', component: OrchestrationComponent },
  { path: 'orchestation-person', component: OrchestationPersonExerciceComponent }, 
  { path: 'photo-album-http', component: PhotoAlbumHttpComponent }, 
  { path: 'tasks-http', component: TaskManagementComponent }, 
  { path: 'reactive-form', component: ReactiveFormExampleComponent }, 
  { path: 'angular-material-example', component: AngularMaterialFormComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
