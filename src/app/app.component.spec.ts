import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'ng13'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('ng13');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header h1')?.textContent).toContain('Angular 2 App');
  });

  it('should test the getName', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app:any = fixture.componentInstance;
    const name = 'Harish';
    app.setName = name;
    expect(app.getName).toEqual(name);
  });

  it('should test the getAge', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app:any = fixture.componentInstance;
    const age = 30;
    app.setAge = age;
    expect(app.getAge).toEqual(age);
  });

  it('should test the getSum', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app:any = fixture.componentInstance;

    expect(app.getSum(10, 20)).toEqual(30);
    expect(app.getSum(-10, -20)).toEqual(-30);
    expect(app.getSum(-10.5, 20)).toEqual(9.5);
    expect(app.getSum(10, -20)).toEqual(-10);
    expect(app.getSum("a", "b")).toEqual("ab");
    expect(app.getSum("a", 20)).toEqual("a20"); 
    expect(app.getSum(10, "b")).toEqual("10b");
    expect(app.getSum(NaN, null)).toBeNaN();
    expect(app.getSum(undefined, undefined)).toBeNaN();
  });

  it('should test the Devide function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app:any = fixture.componentInstance;

    expect(app.devide(10, 20)).toEqual(0.5);
    expect(app.devide(-10, -20)).toEqual(0.5);
    expect(app.devide(-10.5, 20)).toEqual(-0.525);
    expect(app.devide(10, -20)).toEqual(-0.5);
    expect(app.devide("a", "b")).toBeNaN();
    expect(app.devide("a", 20)).toBeNaN(); 
    expect(app.devide(10, "b")).toBeNaN();
    expect(app.devide(10, 0)).toEqual("Infinity");
    expect(app.devide(NaN, null)).toBeNaN();
    expect(app.devide(undefined, undefined)).toBeNaN();
  });
});
