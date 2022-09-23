import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnChanges, DoCheck,OnDestroy {
  user: {id: number, name: string};
  paramsSubscription : Subscription;

  constructor(private route: ActivatedRoute) { }
  
  ngOnDestroy(): void {
    console.log("Inside ngOnDestroy of User component");
    this.paramsSubscription.unsubscribe();
  }

  ngDoCheck(): void {
    console.log("Inside ngDoCheck of User component");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside ngOnChanges of User component");
  }

  ngOnInit() {
    console.log("Inside NgonInit of User component");
    this.user={
      id:this.route.snapshot.params["id"],
      name:this.route.snapshot.params["name"]
    };

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params)=>{
          this.user.id = params["id"];
          this.user.name = params["name"];
      }
    )
  };

}
