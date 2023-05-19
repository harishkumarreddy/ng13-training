import { Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

// impliment with all lifecycle hooks
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  title = environment.env;
  name:string | null ;
  age:number;

  constructor() {
    console.log('constructor');
    this.name = '';
    this.age = 0;
  }
  set setName (value:any) {
    this.name = value;
  }
  get getName () {
    return this.name;
  }

  set setAge (value:number) {
    this.age = value;
  }
  get getAge () {
    return this.age;
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    this.setName = 'Harish';
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
    // console.log(this.getName);
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
    this.setName(null);
    // console.log(this.getName);
  }

  
}
