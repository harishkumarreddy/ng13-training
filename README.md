# Ng13

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Angular
### Symantic Version:
Major.Minor.Patch
### Major:
overal project structure, new features, breaking changes
EX:
1.0.0 -> 2.0.0 -> 3.0.0 -> ...
### Minor:
new features, no breaking changes
EX:
1.0.0 -> 1.1.0 -> 1.2.0 -> ...

### Patch:
bug fixes, no new features, no breaking changes
EX:
1.0.0 -> 1.0.1 -> 1.0.2 -> ...

# Angular symantic structure:
```
|-project
|---src
|-----app
|-------module
|---------routing
|---------component(ts)
|---------component-view(HTML)
|---------component-stylesw(css)
|---------component-spec(test)
|-------module
|---------component
|-----------component(ts)
|-----------component-view(HTML)
|-----------component-stylesw(css)
|-----------component-spec(test)
|---------Services
|-----------api intigration(http)
|---------Models
|-----------user model
|---------Interfaces
|-----------user interface
|---------Pipes
|-----------custom pipes
|---------Directives
|-----------custom directives
|---------Forms
|-----------custom forms
```

# Design Patterns & Principles:
1. SOLID principles
    1. Single Responsibility Principle
        -- A class should have only one reason to change.
    2. Open Closed Principle
        -- A class should be open for extension but closed for modification.
    3. Liskov Substitution Principle
        -- Derived classes must be substitutable for their base classes.
    4. Interface Segregation Principle
        -- Make fine grained interfaces that are client specific.
    5. Dependency Inversion Principle
        -- Depend on abstractions. Do not depend on concretions.
2. Design Patterns
    1. Singleton
        -- A class of which only a single instance can exist.
    2. Factory
        -- A component responsible solely for the wholesale (not piecewise) creation of objects.
    3. Observer
        -- A way of notifying change to a number of classes.
    4. Decorator
        -- Adding behaviour to individual objects dynamically.
    6. Adapter
        -- Match interfaces of different classes.
    
    7. DRY* -> Don't Repeat Yourself
        -- Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
    8. KISS* -> Keep It Simple Stupid
        -- Keep things as simple as possible, but no simpler.
    9. YAGNI* -> You Ain't Gonna Need It
        -- You aren't going to need it.

    10. TDD* -> Test Driven Development
        -- Write tests before writing code.
    11. BDD* -> Behavior Driven Development
        -- Write tests before writing code.
    12. DDD* -> Domain Driven Development
        -- Write tests before writing code.

## Pre-requisites: (* is required)
1. Javascript*
2. HTML*
3. CSS*
4. Typescript
5. NodeJS

# Bulding Blocks:
0. Script 
    1. Javascript
    2. EcmaScript (ES) ->javascript standard ES5, ES6, ES2015, ES2016, ES2017, ES2018, ES2019, ES2020
    3. Typescript -> superset of javascript
1. Modules
2. Components and Templates
3. Data binding
    1. uni-directional data flow
        a. class to view -> Data binding {{variable}}
        b. view to class -> Event binding (click)="function(e)"
    2. bi-directional data flow(MVVM) -> 2 way data binding [(ngModel)]="variable"
3A. Property binding -> [property]="variable"
3B. Event binding -> (event)="function(e)"
3C. input & output binding -> @Input() @Output()
    1. input -> @Input() variable: type -> parent to child data flow
    2. output -> @Output() variable: EventEmitter<type> -> child to parent data flow
4. Directives
    1. Structural directives -> *ngIf, *ngFor
    2. Attribute directives -> [ngClass], [ngStyle]
    3. Component directives -> <app-component></app-component>
    4. Custom directives -> @Directive()
5. Pipes/filters 
    1. built-in pipes -> {{variable | pipe}}
        a. date -> {{variable | date: 'short'}}, {{variable | date: 'shortDate'}}, {{variable | date: 'shortTime'}}, {{variable | date: 'medium'}}, {{variable | date: 'mediumDate'}}, {{variable | date: 'mediumTime'}}, {{variable | date: 'long'}}, {{variable | date: 'longDate'}}, {{variable | date: 'longTime'}}
        b. currency -> {{variable | currency: 'USD': 'symbol'}}
        c. number -> {{variable | number: '1.2-2'}}
        d. json -> {{variable | json}}
        e. slice -> {{variable | slice: 0: 2}}
        f. uppercase -> {{variable | uppercase}}
        g. lowercase -> {{variable | lowercase}}
        h. titlecase -> {{variable | titlecase}}
        i. percent -> {{variable | percent}}
        j. decimal -> {{variable | decimal}}
        k. async -> {{variable | async}}
    2. custom pipes -> {{variable | customPipe}}
6. Forms
    1. Template / model driven forms
        ex: <form> 
        <input type="text" [(ngModel)]="variable"> 
        </form>
    2. Reactive forms
        ex: <form [formGroup]="formGroup"> 
        <input type="text" formControlName="variable"> 
        </form>
    3. Dynamic Reactive forms
        ex: <form [formGroup]="formGroup"> 
        <div formArrayName="formArray">
            <div *ngFor="let itemForm of formArray.controls; let i=index">
                <div [formGroup]="itemForm">
                    <input type="text" formControlName="variable">
                </div>
            </div>
        </div>
        </form>
7. Services
    1. Logic seperation
    2. API intigration :: API -> Application Programming Interface
        - SDK -> Software Development Kit
        - Library -> collection of functions
        - WEB Services
            - SOAP -> Simple Object Access Protocol -> XML(Wsdl, Xsd, Xsl): 
                ex: <property-group>
                        <property1>value</property1>
                        <property2>value</property2>
                        <property3>value</property3>
                    </property-group>

            - REST -> Representational State Transfer (REST API)-> JSON
                ex: {
                        "property1": "value",
                        "property2": "value",
                        "property3": "value"
                    }

    WEB Protocol -> 
        1. HTTP -> Hyper Text Transfer Protocol
        2. HTTPS -> Hyper Text Transfer Protocol Secure
        3. FTP -> File Transfer Protocol
        4. SFTP -> Secure File Transfer Protocol
        5. SSH -> Secure Shell
        6. SMTP -> Simple Mail Transfer Protocol
        7. POP3 -> Post Office Protocol 3
        8. IMAP -> Internet Message Access Protocol
        9. WS -> Web Socket
        10. WSS -> Web Socket Secure

    Consepts of REST API -> (CRUD)
        1. Method
            1. GET -> Read/Retrive data
                ex: https://api.github.com/users/username
                    http://myapiserver.com/api/users/2434?name=abc&age=23
            2. POST -> Create (secuerd)
                curl example:
                    curl -X POST -H "Content-Type: application/json" -d '{"name":"xyz","age":23}' http://myapiserver.com/api/users
            3. PUT -> Update (secuerd)
                curl example:
                    curl -X PUT -H "Content-Type: application/json" -d '{"name":"xyz","age":23}' http://myapiserver.com/api/users/2434
            4. DELETE -> Delete
                curl example:
                    curl -X DELETE -H "Content-Type: application/json" http://myapiserver.com/api/users/2434
            5. PATCH -> Partial Update: Update only specific fields
                curl example:
                    curl -X PATCH -H "Content-Type: application/json" -d '{"name":"xyz"}' http://myapiserver.com/api/users/2434
            6. OPTIONS -> Get options
                curl example:
                    curl -X OPTIONS -H "Content-Type: application/json" http://myapiserver.com/api/users/2434
        2. Headers:
            1.Request headers
                1. Content-Type -> application/json, application/xml, application/x-www-form-urlencoded, multipart/form-data
                2. Accept -> application/json, application/xml, application/x-www-form-urlencoded, multipart/form-data
                3. Authorization -> Bearer <token>
            2.Response headers
                1. Encoding -> gzip, deflate, br
                2. Cache-Control -> no-cache, no-store, must-revalidate
        3. Body -> Payload(Request body, Contract JSON), Response body
        4. Status code
            1. 1xx -> Informational
            2. 2xx -> Success
                1. 200 -> OK
                2. 201 -> Created
                3. 202 -> Accepted
                4. 204 -> No Content
            3. 3xx -> Redirection
                1. 301 -> Moved Permanently
                2. 302 -> Found
                3. 304 -> Not Modified
            4. 4xx -> Client Error
                1. 400 -> Bad Request
                2. 401 -> Unauthorized
                3. 403 -> Forbidden
                4. 404 -> Not Found
                5. 405 -> Method Not Allowed
                6. 406 -> Not Acceptable
                7. 409 -> Conflict
                8. 410 -> Gone
            5. 5xx -> Server Error
                1. 500 -> Internal Server Error
                2. 501 -> Not Implemented
                3. 502 -> Bad Gateway
                4. 503 -> Service Unavailable
                5. 504 -> Gateway Timeout
                6. 505 -> HTTP Version Not Supported


8. Dependency Injection
9. Http/ API intigration
    - AJAX -> Asynchronous Javascript And XML
10. Routing
    1. routerLink -> define in anchor tag/link tag
    2. routerOutlet -> to load component/render targeted component
    3. routerLinkActive -> to add active class to targeted link
11. RXJS
12. Testing
13. Interfaces
14. Models/Classes
    1. Data models -> behaves like a data adapter
    2. Intigration models -> Intigrate with Services

# Advanced Angular
1. Lazy loading** -> load chield modules on demand
    ex: create chield module and add it in app-routing.module.ts
    command: ng g m modules/students --route=students --routing=true -m=app.module.ts 
2. Hooks -> Life cycle methods/Events/hooks
    1. Constructor -> called when component is created
    2. ngOnInit -> called when component is initialized
    3. ngOnChanges -> called when component is changed
    4. ngDoCheck -> called when component is checked
    5. ngAfterContentInit -> called when component is content initialized
    6. ngAfterContentChecked -> called when component is content checked
    7. ngAfterViewInit -> called when component is view initialized
    8. ngAfterViewChecked -> called when component is view checked
    9. ngOnDestroy -> called when component is destroyed
3. stores** -> Redux, NgRx 
    1. Store
    2. Actions
    3. Reducers
    4. Selectors
4. SSR -> Server Side Rendering
5. PWA -> Progressive Web App
6. MFE -> Micro Front End
7. Build and Deploy
8. Unit Testing
    A. Jasmin -> Unit testing framework
    B. Karma -> Test runner

    1. Test Sute
    2. Test Sweet
    3. test Bed
    4. test Case

    1. Describe -> Test Suite
    2. It -> Test Case
    3. Expect -> Test Sweet
    4. BeforeEach -> Test Bed
    5. AfterEach -> Test Bed
    6. BeforeAll -> Test Bed
    7. AfterAll -> Test Bed

TDD -> Test Driven Development
 1. allways success -> green
 2. allways fail -> red
 3. +/- -> refactor -> green
 4. worest ever
 5. edge cases



# API Server
 folder: server
 staeps:
    1. open therminal and go to server folder
    2. run command: npm install
    3. run command: npm start
    ```
    Note: Recommended to restart server after any changes
    ```

 DB: MySQL
 configrations: server/config.js
    username: 'root', -> your mysql username. default is root
    password: '', -> your mysql password. default is empty
    database: 'test', -> your mysql database name
    host: '127.0.0.1', -> your mysql host
    driver: 'mysql' -> kepp it as it is


