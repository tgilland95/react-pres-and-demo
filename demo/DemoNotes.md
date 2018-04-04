# Gotchas and helpful notes

## App files and folders

*   all stateful class components go into 'stateful_components'
*   all stateless functional components go into 'stateless_components'

```jsx
    /* under the hood these a
```
## JSX

In html we have to use string-literals, not variables

```html
    <li>first item</li>
```

In jsx we can use variables and html together, any javascript inside html-tags will only be recognized as javascript if it's between curly-braces. here's how you could do the above

```jsx
const listItem = "first item"
<div>
    // jsx is a little strange at first, but it's not that bad
    <li> {numberArray} </li>

    // this works here too
    <li>first item</li>
</div>
```

```jsx
var x = 5
```
