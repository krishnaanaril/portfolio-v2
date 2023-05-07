# Angular 16 - What you need to know

Yesterday Angular team relased version 16 of their framework and they've termed it as the biggest release since its inception. 

Is it? Let's see. 

## Breaking Changes

### Angular Compatibility Compiler (ngcc) is no longer available

This means that we'll no longer be able to use `View Engine` based libraries. The legacy compilation and rendering pipeline `View Engine` was deprecated in v12 for `Ivy`. The `ngcc` (Angular Compatibility Compiler) was a tool used to compile Angular libraries that have been published in the legacy format, which is not compatible with the Angular Ivy runtime, to a format that is compatible with Ivy.

Read more: [What is ngcc in Angular Ivy and why is it important?](https://iq.js.org/questions/angular/what-is-ngcc)

### Deprecated method `addGlobalEventListener` of `EventManger` is removed

This method was used to register a global event handler for either `window`, `document` or `body`, but recently not usedd by the Ivy engine. 

Read more: [Lifting the Veil: Insights into Angular’s EventManagerPlugin](https://netbasal.com/lifting-the-veil-insights-into-angulars-eventmanagerplugin-ed9d14cbb31a)

### A new class `MockPlatformLocation` is now provided by default in tests.

This may replace the use of `SpyLocation` and `RouterTestingModule` in tests. There is also a prposal to deprecate `RouterTestingModule`. 

Tests sometimes do not mock out the `PlatformLocation` and end up affecting real browser state. This can result in a test unintentionally affecting other tests in the suite because the browser state does not usually get reset before the next test runs. Providing `MockPlatformLocation` by default prevents these types of accidental test leakages.

In addition, not providing `MockPlatformLocation` by default led to developers needing to add `RouterTestingModule` to their test suite to avoid the problems above. This module has spy `Location` providers which prevent those issues. This commit now makes `RouterTestingModule` obsolete. 

Read more: [PR for MockPlatformLocation](https://github.com/angular/angular/pull/49137)

### Strict type checking with `ngtemplateoutlet`

If the type is not matching, you'll get compile-time error as below. 

To fix this you can either
    - update the interface/type
    - add [$any() type cast function](https://angular.io/guide/template-expression-operators#any-type-cast-function)

### You can mark component inputs as required. 

You'll get compile-time error, if you marked an input as required but not provided. 

### `QueryList.filter` now supports type guard functions. 

This will result in type narrowing. An example is given below

### Signals

Angular's current implementation of change detection is bit ineffecient as it is based on `zone.js`. If there is any change in parent component, it will re-render all its child components. 

So with this release Angular team introduced a new reactivity model - `Signals` why may phase out `zone.js` in the upcoming releases. The concept of `Signal` is not novel, it is already available in other frameworks like [Preact](https://preactjs.com/guide/v10/signals/) and [Solidjs](https://www.solidjs.com/tutorial/introduction_signals). Right now, it is in developer preview and not recommended for production. It is not a replacement for rxjs, but you can find an immediate use of it by replacing [asyncpipe](https://angular.io/api/common/AsyncPipe) in templates. 

Here are the few functions that'll help you to implement signals:
    - `signal()`: will help you to create a writable signal whose value you can set, update and mutate. 
    - `computed()`: will help you to derive or compose value from other existing signals. It will keep track of the signals referened in the computation.
    - `effect()`: will help you to add side effects. This passed function will be invoked everytime the signal referenced inside it changes.
    - `toSignal()`: will help you to convert an observable to signal. 
    - `toObservable()`: will help you to convert a signal to an observable.

If you are coming from reactjs background, you may see some similarity with `useState()` hook. But both are entirely different. Major differences are:
 - Automatic dependency tracking in signals
 - signals aren't tied to components, they can be used anywhere in an angular application
 - `computed` signals are lazily evaluated.

### Concept of `DestroyRef` and new rxjs operator `takeUntilDestroyed`

`DestroyRef` will allow to register destroy callbacks for a specific lifecycle scope. This feature is applicable to components, directives, pipes, embedded views, and instances of `EnvironmentInjector`. Using `DestroyRef`, it’s possible to create reusable logic that performs necessary cleanup tasks when a scope is destroyed without the need for inheritance. This simplifies the implementation process and reduces complexity.

`takeUntilDestroy` is especially useful when you want to tie the lifecycle of an Observable to a particular component’s lifecycle.

```typescript
data$ = http.get('…').pipe(takeUntilDestroyed());
```

### Improved server side rendering (SSR)

A new function is introduced `provideClientHydration` to enable the non-destructive Angular hydration, along with the provision for http caching. With non-destructive hydration, Angular has the capability of reusing pre-existing DOM structures on the client-side that were initially rendered by the server. This prevents the flicker that occurs when the page is rendered and ready for interaction by users.

With the help of http caching,  requests done on the server side are cached and accessible in client side. This is the default behaviour, but you can opt out if required.

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

Others:

# Angular 16 - Changes and features

## Angular

## 16 next-0

- Angular comptibiltiy compiler (ngcc) has been removed. As a result, view engine libraries can no longer be used in v16+
- `MockPlatformLocation` is now provided by default in tests. This may obsolete `RouterTestingModule`. 
- Angular signals in the public API

## 16 next-1

- Introduce the concept of `DestroyRef`
- Added some helper functions to migrate class guards to function guards

## 16 next-2
- Add mergeApplicationConfig method
- Expose information about the last successful `Navigation`. Use `lastSuccessfulNavigation()` in `Router`

## 16 next-3
- `BrowserModule.withServerTransition` has been deprecated. `APP_ID` should be used instead to set the application ID. The `APP_ID` token value is no longer randomly generated.
- Introduce `runInInjectionContext` and deprecate prior version
- Introduces a function `provideServiceWorker` to replace the call to `ServiceWorkerModule.register()` 

## 16 next-4
- Add API to provide CSP nonce for inline stylesheets
- Allow removal of previously registered DestroyRef callbacks

## 16 next-5

## CLI
- `ng g resolver` and `ng g guard` now generate a functional resolver or guard by default. It is still possible to generate a (deprecated) class-based resolver or guard by using `ng g resolver --no-functional` or `ng g guard --no-functional`.
- The CLI no longer allows to generate `CanLoad` guards. Use `CanMatch` instead.


## Component

## Other notes
- TypeScript **decorators** were stabilized in TypeScript v5
- **Yak-shaving**: “Shaving a Yak” means performing a seemingly endless series of small tasks that must be completed before the next step in the project can move forward.
- **Bikeshedding**: The term “bikeshedding” refers to the tendency for a committee to spend time discussing the most trivial and easily-understood aspects of a design, rather than focusing on the important fundamentals.
- TypeScript v5 adds support for multiple configuration files in `extends`
- 16🍬coming in Angular v16 🅰️
    1.🚦 Signals
    2.💦 Non-destructive hydration support
    3.🏎 Esbuild dev-server
    4.🎨 Material components token API
    5.💎 Create standalone app schematics
    6.📢 Required inputs
    7.🚏 Bind route data to inputs
    8.🧩 Set inputs in NgComponentOutlet
    9.🔨 DestroyRef & takeUntilDestroyed
    10.💙 TS 5.0 support (Non-experimental decorators support)
    11.☑️ NgTemplateOutlet strict type-checking
    12.🔋 Configure zone in bootstrapApplication
    13.💡 provideServerRendering for server-side standalone apps
    14.💡 API to provide CSP nonce for inline stylesheets
    15.♻️ Reuse server generated component styles
    16.👋 Bye bye NGCC & entryComponents & support for Node.js v14



## References
- https://github.com/angular/angular/blob/main/packages/compiler/design/architecture.md
- https://docs.angular.lat/guide/ivy
- https://github.com/angular/angular/pull/49137
- https://netbasal.com/getting-to-know-the-destroyref-provider-in-angular-9791aa096d77
- https://next.angular.io/api/router/Router#lastSuccessfulNavigation
- https://blog.angular.io/how-the-angular-compiler-works-42111f9d2549
- https://netbasal.com/getting-to-know-the-runincontext-api-in-angular-f8996d7e00da
- https://github.com/angular/angular/discussions/49090
- https://github.com/angular/angular/pull/49633
- https://blog.ninja-squad.com/2023/05/03/what-is-new-angular-16.0/

