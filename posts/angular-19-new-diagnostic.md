---
title: Angular 19 | Diagnostic for unused standalone imports 
description: Angular v19 introduces a new diagnostic tool that reports cases where a declaration is present in the imports array but isn't being used anywhere in the application.
published: true
publishedAt: 2024-09-27T00:00:00.000Z
updatedAt: 2024-09-27T00:00:00.000Z
category: tech
image: 'banners/75'
keywords: 
    - feature
    - angular    
authors:
  - Krishna Mohan A M
---

This [feature](https://github.com/angular/angular/pull/57605), which was [long pending](https://github.com/angular/angular/issues/46766), addresses a common issue in Angular applications. As standalone components become the standard, it's possible for some components to remain unused in templates even though they are imported by a parent component. This can lead to increased compile times and larger bundle sizes, which are detrimental to application performance.

## How Angular v19 Tackles the Issue

Angular v19 introduces a new diagnostic tool that reports cases where a declaration is present in the imports array but isn't being used anywhere in the application. By default, this diagnostic is reported as a warning, allowing developers to identify and remove unnecessary imports without interrupting the compilation process.

## Configuration in `tsconfig`

To control this new diagnostic feature, developers can use the following configuration in their tsconfig.json file:
```json
{
  "angularCompilerOptions": {
    "extendedDiagnostics": {
      "checks": {
        "unusedStandaloneImports": "suppress"
      }
    }
  }
}
```

## Understanding the unusedStandaloneImports Option

The unusedStandaloneImports option accepts three values, each dictating how the diagnostic should be treated:

- `warning`: This is the default setting. The diagnostic is treated as a warning, which means it will not fail the compilation process. It serves as a gentle reminder to clean up any unused imports.
    ![](/images/ang19_01.png)
- `error`: When set to error, the diagnostic is treated as a hard error. This will cause the compilation to fail, enforcing a stricter code quality standard.
    ![](/images/ang19_03.png)
- `suppress`: If you choose to suppress the diagnostic, it will be ignored altogether. This might be useful in scenarios where you are aware of the unused imports and have a specific reason to keep them.
    ![](/images/ang19_02.png)