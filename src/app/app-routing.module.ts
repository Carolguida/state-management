import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FormsComponent } from "./forms/forms.component";
import { RecebeFormsComponent } from "./recebe-forms/recebe-forms.component";

export const routes: Routes = [
    { path: "", component: FormsComponent },    
    { path: "recebe-forms", component: RecebeFormsComponent },    
    
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }