# jotdown

_Create markdown based presentations with ease_

JotDown is a small utility to quickly generate presentations from markdown files, including syntax highlight, effects etc.
JotDown is based on [ReMark](https://remarkjs.com/) but improves the workflow and adds some additional features.
It targets developers and anybody familiar with markdown.
Example presentation: [http://jotdown.surge.sh/](http://jotdown.surge.sh/)

## Features:

* Generate slides from multiple markdown files
* Introduce appear effect
* Hot reloading
* Easily publish & share slides through [surge](https://surge.sh/)
* The full list of supported markdown futures can be found in the [ReMark documentation](https://github.com/gnab/remark/wiki)
* JotDown tries to stay basic. If you feel for adding all kind of fancy interactive features and cool animations, take a look at [Spectacle](http://formidable.com/open-source/spectacle/)!
* Beyond that, pull requests with improvements are welcome!

## Getting started

* Clone this repository
* Run `yarn install` or `npm install`
* Run `npm start`
* Open browser at `http://localhost:3000/`

## Using JotDown

* Edit the markdown files in the `/src/` folder. Multiple markdown files will automatically be sorted and concatenated
* If a file is modified the browser will automatically reload
* Example slide deck: [The Quest For Immer Mutable State Management, ReactiveConf 2016](https://immer-mutable-state.surge.sh/#1) ([source](https://github.com/mweststrate/reactive2016-slides/edit/master/slides.md))
* Use `npm run release` to publish your slideshow on surge.sh.

## Build in directives

**Dividing slides**

Use `---` as separator between slides

**Headings**

Use `# Markdown Headers` to create titles

**Using custom styling**

In remark every piece of content can be wrapped in a `div` and given a classname by the following syntax:

```
.myCoolClass[
    Some Markdown
]
```

Then in `src/slides.css` add something like:
```
.myCoolClass {
    color: blue;
}
```

**Make items appear one by one**

The built in `appear` class can be used to have items appear one by one:

```markdown
---

# Problems

1. .appear[No standardized serialization .appear[(&ldquo;serializr&rdquo; package helps)]]
2. .appear[Deep serializing state is expensive]
3. .appear[No structural sharing]
```

**Code blocks**

Use triple backticks, with an optional language name, for syntax highlighting:

```
 ```javascript
 function helloWorld() {

 }
 ` ``
```

Code combines nicely with `.boring[]` to make make some code less important

**Backgrounds**

Use the built-in class `background` to create a full screen background image.
Make sure to set the background before actual content.

```
.background[
    ![frozen](img/frozen/frozen.jpg)
]
```

Combine with `.lighten` to lighten the background:

```
.lighten.background[
    ![frozen](img/frozen/Elsa-Snow-Queen-In-Frozen.jpg)
]
```

**Custom HTML**

...Is supported:

```
<ol style="clear:none; position: relative; left: 200px; width:400px;">
    <li>State snapshots</li>
    <li>Replayable actions</li>
</ol>
```

**Customizing slide layout**

It is possible to set a custom class on a slide. Use `fullscreen` for example to remove margins:

**Further options**

Can be found in the [remark documentation](https://github.com/gnab/remark/wiki)!

```
---

class: fullscreen

![frozen](img/frozen/061913_inspiration-for-frozen-disney-animation-6_0.jpg)

---
```

## Further customization...

* Images and other assets are best stored in `img`
* The default stylesheet can be changed in `slides.css`
* Further customization can be done in `assets/slides.js` and `assets/template.html`

---

_jotdown_ is proudly created at [Mendix](https://www.mendix.com/company/join-our-team/)

<img src="img/mendix-logo.png" width="400px" />
