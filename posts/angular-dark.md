---
title: Implement dark/light mode picker in angular with material pre-built themes
description: In this article we'll implement a theme picker that make use of material preb-built themes
published: true
publishedAt: 2025-01-19T00:00:00.000Z
updatedAt: 2025-01-19T00:00:00.000Z
category: tech
image: 'banners/76'
keywords: 
    - angular
    - tutorial
    - material    
authors:
  - Krishna Mohan A M
---

style manager: https://github.com/angular/components/blob/main/material.angular.io/src/app/shared/style-manager/style-manager.ts

```javascript
import { Component, effect, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StyleManager } from '../theme-picker/style-manager';

@Component({
  selector: 'app-mode-picker',
  imports: [MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './mode-picker.component.html',
  styleUrl: './mode-picker.component.css'
})
export class ModePickerComponent implements OnInit {

  mode = signal('light');
  static storageKey = 'docs-theme-storage-current-name';

  /**
   *
   */
  constructor(public styleManager: StyleManager) {
    effect(() => {      
      if (this.mode() == 'dark') {
        this.styleManager.setStyle('theme', `cyan-orange.css`);
      } else {
        this.styleManager.setStyle('theme', `azure-blue.css`);
      }
    });

  }

  ngOnInit(): void {
    const currentTheme = this.getStoredThemeName() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentTheme) {
      this.mode.set(currentTheme);
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const newColorScheme = event.matches ? "dark" : "light";
      if (event.matches) {
        this.mode.set('dark');
      } else {
        this.mode.set('light');
      }
    });

  }

  changeMode() {    
    if (this.mode() == 'dark')
      this.mode.set('light');    
    else
      this.mode.set('dark');
    this.storeTheme(this.mode());
  }

  storeTheme(theme: string) {
    try {
      window.localStorage[ModePickerComponent.storageKey] = theme;
    } catch { }
  }

  getStoredThemeName(): string | null {
    try {
      return window.localStorage[ModePickerComponent.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ModePickerComponent.storageKey);
    } catch { }
  }

}

<button mat-icon-button (click)="changeMode()">
    @if (mode() == 'dark') {
    <mat-icon>
        light_mode
    </mat-icon>
    } @else {
    <mat-icon>
        dark_mode
    </mat-icon>
    }

</button>
```