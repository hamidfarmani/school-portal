import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  private arrParents = [];

  constructor(private parentService: ParentService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAllParents();
  }

  getAllParents() {
    this.parentService.getAll().subscribe(
      res =>{
        this.arrParents = res;
      },
      error => {
        
      }
  );
  }

}
