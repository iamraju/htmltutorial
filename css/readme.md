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

## Margin & Padding (Box Model)
All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

**Content** - The content of the box, where text and images appear
**Padding** - Clears an area around the content. The padding is transparent
**Border** - A border that goes around the padding and content
**Margin** - Clears an area outside the border. The margin is transparent

### Width and Height of an Element

When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.

## CSS Layout - float and clear
The float property specifies whether or not an element should float.

The clear property is used to control the behavior of floating elements.
- **clear:**	Specifies on which sides of an element where floating elements are not allowed to float
- **float:**	Specifies whether or not an element should float
- **overflow:**	Specifies what happens if content overflows an element's box
- **overflow-x:**	Specifies what to do with the left/right edges of the content if it overflows the element's content area
- **overflow-y:**	Specifies what to do with the top/bottom edges of the content if it overflows the element's content area

## CSS Layout - The position Property

The position property specifies the type of positioning method used for an element (`static`, `relative`, `fixed` or `absolute`).

It then works with left, right, top and bottom properties

### static

HTML elements are positioned `static` by default. Static positioned elements are not affected by the `top`, `bottom`, `left`, and `right` properties. 

An element with `position: static;` is not positioned in any special way; it is always positioned according to the normal flow of the page:

```css
div.static {
    position: static;
    border: 3px solid #73AD21;
}
```

### relative
An element with `position: relative;` is positioned relative to its normal position.

Setting the `top`, `right`, `bottom`, and `left` properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

```css
div.relative {
    position: relative;
    left: 30px;
    border: 3px solid #73AD21;
}
```

### fixed
An element with `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The `top`, `right`, `bottom`, and `left` properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:

```css
div.fixed {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    border: 3px solid #73AD21;
}
```

### absolute

An element with `position: absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

```css
div.relative {
    position: relative;
    width: 400px;
    height: 200px;
    border: 3px solid #73AD21;
} 

div.absolute {
    position: absolute;
    top: 80px;
    right: 0;
    width: 200px;
    height: 100px;
    border: 3px solid #73AD21;
}
```