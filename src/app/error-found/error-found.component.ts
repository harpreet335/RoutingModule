import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-error-found',
  templateUrl: './error-found.component.html',
  styleUrls: ['./error-found.component.css']
})
export class ErrorFoundComponent implements OnInit {
  Message : string;

  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.Message  = this.activeRoute.snapshot.data["Message"];
  }

}
