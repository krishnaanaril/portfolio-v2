---
title: What's new in Angular? -  Standalone components 
description: Last week Angular team released v15 of the framework which is a major release with a lot of new features. Among that, standalone components are out of developer preview and is stable now. It is also accompanied by a set of new standalone APIs to enhance the development.
published: true
publishedAt: 2022-11-22T00:00:00.000Z
updatedAt: 2022-12-03T00:00:00.000Z
category: tech
image: 'banners/67'
keywords: 
    - standalone
    - angular    
authors:
  - Krishna Mohan A M
---

>### Prerequisite
>Basic knowledge in Angular and frontend development.



Last week Angular team released v15 of the framework which is a major release with a lot of new features. Among that, standalone components are out of developer preview and is stable now. It is also accompanied by a set of new standalone APIs to enhance the development.

## Why is it a big deal?

In prior versions, components do not have an independent existence. They should have an associated [module](https://angular.io/api/core/NgModule) and should be declared there. This resulted in a lot of boilerplate code for simple applications. 

For bigger applications lazy loaded modules get bloated with unwanted components. Developers found a workaround for this by using SCAM (Single Component Angular Module) pattern. Here for each component, developers create an `NgModule` that imports only the declarables used by that specific component. With standalone components we can avoid these bloats and workarounds.

Another big advantage is it reduces the learning curve for angular. Angular was notorious for its steep learning curve compared to other javascript frameworks like React/Vue. Now with standalone components beginners can bootstrap an angular application without much fuss.

## How do we create a new standalone component?

 Components, directives, and pipes can now be marked as `standalone: true`.  Their decorators will have a new Boolean flag that needs to be set as `true`. A sample component is given below.

 

```javascript
import { USER_NAME } from '../main';

@Component({
 standalone: true,
 selector: 'hello',
 template: `<h1>Hello {{name}}!</h1>`,
 styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
 
 constructor(@Inject(USER_NAME)public name: string){}
}
```

Here USER_NAME is an [injetiontoken](https://angular.io/api/core/InjectionToken) that is configured using angular dependency injection.

Also, we can bootstrap an angular application without any `NgModule` by using a standalone component as the application's root component. This is done using the bootstrapApplication API in `main.ts`:

 
```javascript
import { HelloComponent } from './app/hello.component';
import { InjectionToken } from '@angular/core';

export const USER_NAME = new InjectionToken<string>('User name');

bootstrapApplication(HelloComponent, 
  {
 providers: [
      { provide: USER_NAME, useValue: 'Krishna Mohan'}
    ]
  });
```

You can find the complete working code in [stackblitz](https://stackblitz.com/edit/ang-standalone-km21)

## Wrap up

What are your thoughts on standalone components? Do you think that this feature will improve your angular codebase? Share your comments below.

## References
1. https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8
2. https://angular.io/guide/standalone-components
3. https://medium.com/marmicode/your-angular-module-is-a-scam-b4136ca3917b
