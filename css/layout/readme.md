# Layout

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