import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit : boolean = false;
  changesSaved : boolean = false;

  constructor(private serversService: ServersService, private activeRoute : ActivatedRoute, private router : Router) { }
  
  CanDeactivate() : boolean | Observable<boolean> | Promise<boolean>
  {    
    if(!this.allowEdit)
    {
        return true;
    }
    if(!this.changesSaved && (this.serverName != this.server.name || this.serverStatus != this.server.status))
    {      
        return confirm("Do you want to exit the page without saving changes");
    }
    {      
        return false;
    }
  }

  ngOnInit() {
    let id = +this.activeRoute.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log(this.activeRoute.snapshot.queryParams);
    console.log(this.activeRoute.snapshot.fragment);

    this.activeRoute.queryParams.subscribe((queryParams: Params)=>{
      this.allowEdit = queryParams["allowEdit"] === '1' ? true : false;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(["../",{relative: this.activeRoute}])
  }

}
