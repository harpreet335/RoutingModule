import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
    CanDeactivate : () => boolean | Observable<boolean> | Promise<boolean>
}



export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>
{
    canDeactivate(component: CanComponentDeactivate,
                  currentRoute: ActivatedRouteSnapshot, 
                  currentState: RouterStateSnapshot, 
                  nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
                      console.log("Inside deactivate service");
        return component.CanDeactivate();
    }
    
}