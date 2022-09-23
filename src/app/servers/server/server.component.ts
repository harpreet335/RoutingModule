import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';


import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  id :number;

  constructor(private serversService: ServersService, private currentRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    //Loading data using Service
    // this.id = +this.currentRoute.snapshot.params["id"]
    // this.server = this.serversService.getServer(this.id);
    // this.currentRoute.params.subscribe((params:Params)=>{
    //   this.id= +params["id"];
    //   this.server = this.serversService.getServer(this.id);
    // });
    
    //Here data is being loading from Route parameter
      this.currentRoute.data.subscribe((data:Data)=>{
        this.server = data["server"];
    })

    //Same code when 3 parameter are present in the Route
    // this.server= { 
    //   id:this.currentRoute.snapshot.params["id"],
    //   name:this.currentRoute.snapshot.params["name"] , 
    //   status:this.currentRoute.snapshot.params["status"] 
    // };
  }

  onEdit(){
    //this.router.navigate(['/servers',this.server.id,'edit']);
    this.router.navigate(['edit'],{relativeTo: this.currentRoute, queryParamsHandling:"merge"});
  }
}
