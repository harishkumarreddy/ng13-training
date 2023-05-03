import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.less']
})
export class ViewstudentComponent implements OnInit {
  id: number = 0;
  constructor(
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
  }

}
