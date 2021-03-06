Internal Stylesheet

```html
<style type=”text/css”>
CSS Content Goes Here
</style>
```

External Stylesheet
```html
<link rel=”stylesheet” type=”text/css” href=“Path To stylesheet.css” />
```
Or you can also use the @import method as shown below
```html
<style type=”text/css”>

@import url('css/styles.css')

</style>
```
Inline Styles
```html
<p class="pclass" style="color: #ff0000;"">Some red text</p>
```
## Basic CSS Rules

When creating a CSS document, the following rules apply:

1. When more than 1 overlapping styles are applied to the same element, only the last style is visible:
```css
p {color: red}
p {color: blue}
/* Blue color is applied */
```
2. The style applied in the parent node at the DOM tree is inherited. For more information, see W3C inheritance documentation.
3. The style that has the highest CSS specificity is applied. The specificity of different elements is defined as follows:
  - ID attribute = 100
  - Class attribute = 10
  - Element = 1
```html
<body>
<p id="target" class="target">Hello World</p>
</body>
```

```css
   p#target {color: black} /* Specificity: 101 */
   p#target {color: red} /* Specificity: 101 */
   p.target {color: blue} /* Specificity: 11 */
   p {color: tomato} /* Specificity: 1 */
   /* Red color is applied */
```
4. When the !important attribute is used, it has the highest priority:
```html
<body>
<p id="target" class="target">Hello World</p>
</body>
```

```css
   p#target {color: black !important}
   p#target {color: red}
   p.target {color: blue}
   p {color: tomato}
   /* Black color is applied */
```

## Using HTML
- <link> tag in the <head> element
- <style> tag in the <head> element
- @import attribute in the CSS area
- style attribute in a HTML elemen


## Syntax
``
selector {
	property: value
}
``

### Example
```css
body {
  background: #eeeeee;
  font-family: “Trebuchet MS”, Verdana, Arial, serif;
}
```

## Inheritance
When you nest one element inside another, the nested element will inherit the properties assigned to the containing element. Unless you modify the inner elements values independently.

```css
body {font-family: Verdana, serif;}

h1 {font-family: Georgia, sans-serif;}
p {font-family: Tahoma, serif;}
```

## Grouping Selectors

```css
h1, h2, p {
    text-align: center;
    color: red;
}
```
## CSS Comments

```css
/* This is a single-line comment */
```
