# css-animation-directions 0.0.7

Css module of single purpose classes for animation directions

#### Stats

228 | 16 | 16
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-animation-directions
```

#### With Git

```
git clone https://github.com/tachyons-css/css-animation-directions
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-animation-directions";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-animation-directions">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*
   ANIMATION DIRECTIONS
*/
.a-dir-norm { animation-direction: normal; }
.a-dir-rev { animation-direction: reverse; }
.a-dir-alt { animation-direction: alternate; }
.a-dir-alt-rev { animation-direction: alternate-reverse; }
@media screen and (min-width: 48em) {
 .a-dir-norm-ns { animation-direction: normal; }
 .a-dir-rev-ns { animation-direction: reverse; }
 .a-dir-alt-ns { animation-direction: alternate; }
 .a-dir-alt-rev-ns { animation-direction: alternate-reverse; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .a-dir-norm-m { animation-direction: normal; }
 .a-dir-rev-m { animation-direction: reverse; }
 .a-dir-alt-m { animation-direction: alternate; }
 .a-dir-alt-rev-m { animation-direction: alternate-reverse; }
}
@media screen and (min-width: 64em) {
 .a-dir-norm-l { animation-direction: normal; }
 .a-dir-rev-l { animation-direction: reverse; }
 .a-dir-alt-l { animation-direction: alternate; }
 .a-dir-alt-rev-m { animation-direction: alternate-reverse; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

MIT

