import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorFoundComponent } from "./error-found/error-found.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { RouteResolver } from "./servers/server/route-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


const routes : Routes =[
    // { path:'',redirectTo:'/not-found' ,pathMatch:'full'},
    { path:'',component:HomeComponent },
    { path:'users',component:UsersComponent , children: [
      { path:':id/:name',component:UserComponent }
    ]},
    { path:'servers', canActivateChild:[AuthGuard] ,component:ServersComponent , children:[
      { path:':id',component:ServerComponent , resolve:{server:RouteResolver} },
      { path:':id/edit',component:EditServerComponent , canDeactivate:[CanDeactivateGuard] }
    ]},
    //{ path:"not-found", component: NotFoundComponent},
    { path:"not-found", component: ErrorFoundComponent, data:{"Message":"Some error occured while loading this page."}},
    { path:"**", redirectTo:"/not-found"}
];

@NgModule(
    {
        imports:[
            RouterModule.forRoot(routes,{useHash:true})
        ],
        exports:[
            RouterModule
        ]
    }
)
export class AppRoutingModule{
}