# @afspeirs/tab

[![npm](https://img.shields.io/npm/v/@afspeirs/tab.svg)](git@github.com:afspeirs/tab.git)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@afspeirs/tab.svg)](https://github.com/afspeirs/tab)

A simple tab module

## Install
```
npm i @afspeirs/tab
```

## Markup

Use divs with a data-tab attribute to set the tab to active.


```html
<div class="tab-buttons">
  <div data-tab="tab-1" class="active">Tab 1</div>
  <div data-tab="tab-2">Tab 2</div>
</div>
```

Create an element which has a class of tab-content with an id that matches an existing data-tab value

```html
<div class="tab-container">
  <div class="tab-content active" id="tab-1">
    Tab 1 content
  </div>
  <div class="tab-content" id="tab-2">
    Tab 2 content
  </div>
</div>
```

## Javascript

Import and initialise the tab module.

```js
import Tab from '@afspeirs/tab';
Tab.init();
```

## CSS

A class of active is added to the selected tabs. You can show and hide the tabs with the below css:

```css
.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
}
```
