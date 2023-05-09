---
title: Angular 16 - What you need to know 
description: Yesterday Angular team released version 16 of their framework and they've termed it as the biggest release since its inception. Is it? Let's see.
published: true
publishedAt: 2023-05-06T00:00:00.000Z
updatedAt: 2022-05-06T00:00:00.000Z
category: tech
image: 'banners/73'
keywords: 
    - signals
    - angular    
authors:
  - Krishna Mohan A M
---

Yesterday Angular team released version 16 of their framework and they've termed it as the biggest release since its inception. 

Is it? Let's see. 

## Signals

Angular's current implementation of change detection is bit inefficient as it is based on `zone.js`. If there is any change in parent component, it will re-render all its child components. 

So with this release Angular team introduced a new reactivity model - `Signals` which may phase out `zone.js` in the upcoming releases. The concept of `Signal` is not novel, it is already available in other frameworks like [Preact](https://preactjs.com/guide/v10/signals/) and [Solidjs](https://www.solidjs.com/tutorial/introduction_signals). Right now, it is in developer preview and not recommended for production. It is not a replacement for rxjs, but you can find an immediate use of it by replacing [async pipe](https://angular.io/api/common/AsyncPipe) in templates. 

Here are the few functions that'll help you to implement signals:

- `signal()`: will help you to create a writable signal whose value you can set, update and mutate. 
- `computed()`: will help you to derive or compose value from other existing signals. It will keep track of the signals referenced in the computation.
- `effect()`: will help you to add side effects. This passed function will be invoked every time the signal referenced inside it changes.
- `toSignal()`: will help you to convert an observable to signal. 
- `toObservable()`: will help you to convert a signal to an observable.

If you are coming from reactjs background, you may see some similarity with `useState()` hook. But both are entirely different. Major differences are:
 - Automatic dependency tracking in signals
 - signals aren't tied to components, they can be used anywhere in an angular application
 - `computed` signals are lazily evaluated.

 ![Signal example](/images/signal-ex.gif)
*Signal example*

## Concept of `DestroyRef` and new rxjs operator `takeUntilDestroyed`

`DestroyRef` will allow to register destroy callbacks for a specific lifecycle scope. This feature is applicable to components, directives, pipes, embedded views, and instances of `EnvironmentInjector`. Using `DestroyRef`, it’s possible to create reusable logic that performs necessary cleanup tasks when a scope is destroyed without the need for inheritance. This simplifies the implementation process and reduces complexity.

`takeUntilDestroy` is especially useful when you want to tie the lifecycle of an Observable to a particular component’s lifecycle.

```typescript
data$ = http.get('…').pipe(takeUntilDestroyed());
```

## Improved server side rendering (SSR)

A new function `provideClientHydration` is introduced to enable the non-destructive Angular hydration, along with the provision for http caching. With non-destructive hydration, Angular has the capability of reusing pre-existing DOM structures on the client-side that were initially rendered by the server. This prevents the flicker that occurs when the page is rendered and ready for interaction by users.

With the help of http caching,  requests done on the server side are cached and accessible in client side. This is the default behavior, but you can opt out if required.

```typescript
import {
  bootstrapApplication,
  provideClientHydration,
  withNoHttpTransferCache,
} from '@angular/platform-browser';
// ...
bootstrapApplication(RootCmp, {
  // You can opt out of http caching if required 👇  
  providers: [provideClientHydration(withNoHttpTransferCache())]
});
```

Read more: [PR for `provideClientHydration`](https://github.com/angular/angular/pull/49666)

## Angular Compatibility Compiler (ngcc) is no longer available

This means that we'll no longer be able to use `View Engine` based libraries. The legacy compilation and rendering pipeline `View Engine` was deprecated in v12 for `Ivy`. The `ngcc` (Angular Compatibility Compiler) was a tool used to compile Angular libraries that have been published in the legacy format, which is not compatible with the Angular Ivy runtime, to a format that is compatible with Ivy.

Read more: [What is ngcc in Angular Ivy and why is it important?](https://iq.js.org/questions/angular/what-is-ngcc)

## Deprecated method `addGlobalEventListener` of `EventManger` is removed

This method was used to register a global event handler for either `window`, `document` or `body`, but recently not used by the Ivy engine. 

Read more: [Lifting the Veil: Insights into Angular’s EventManagerPlugin](https://netbasal.com/lifting-the-veil-insights-into-angulars-eventmanagerplugin-ed9d14cbb31a)

## A new class `MockPlatformLocation` is now provided by default in tests.

This may replace the use of `SpyLocation` and `RouterTestingModule` in tests. There is also a proposal to deprecate `RouterTestingModule`. 

Tests sometimes do not mock out the `PlatformLocation` and end up affecting real browser state. This can result in a test unintentionally affecting other tests in the suite because the browser state does not usually get reset before the next test runs. Providing `MockPlatformLocation` by default prevents these types of accidental test leakages.

In addition, not providing `MockPlatformLocation` by default led to developers needing to add `RouterTestingModule` to their test suite to avoid the problems above. This module has spy `Location` providers which prevent those issues. This commit now makes `RouterTestingModule` obsolete. 

Read more: [PR for MockPlatformLocation](https://github.com/angular/angular/pull/49137)

## Strict type checking with `ngtemplateoutlet`

If the type is not matching, you'll get compile-time error as below. 

To fix this you can either
    - update the interface/type
    - add [$any() type cast function](https://angular.io/guide/template-expression-operators#any-type-cast-function)

```typescript
interface MyContext {
  $implicit: string;
  // xxx: string; 👈 Add this or
}

@Component({
  standalone: true,
  imports: [NgTemplateOutlet],
  selector: 'person',
  template: `
    <ng-container
      *ngTemplateOutlet="
        myTemplateRef;        
        context: $any({ $implicit: 'test', xxx: 'xxx' }) //👈 add $any() to avoid error with xxx
      "></ng-container>
  `,
})
export class PersonComponent {
  myTemplateRef!: TemplateRef<MyContext>;
}
```

## You can mark component inputs as required. 

You'll get compile-time error, if you marked an input as required but not provided.

![Angular required input error](/images/ang_reqinput.png)
*Angular required input error*

## `QueryList.filter` now supports type guard functions. 

This will result in type narrowing. An example is given below

```typescript
const foos: Array<'foo'> = queryList.filter((item): item is 'foo' => item === 'foo');
```



## New `standalone` options in angular CLI

`ng new --standalone` will create an application based on standalone API without NgModules. Similarly `standalone` option is added to `ng generate` for application, components, directives, libraries and pipes.code

