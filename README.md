# css-animation-directions 1.0.9

Css module of single purpose classes for animation directions

#### Stats

250 | 16 | 32
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-animation-directions
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/css-animation-directions
```

ssh:
```
git clone git@github.com:tachyons-css/css-animation-directions.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-animation-directions";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/css-animation-directions@1.0.9/css/css-animation-directions.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-animation-directions">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*
   ANIMATION DIRECTIONS
*/
.a-dir-norm { -webkit-animation-direction: normal; animation-direction: normal; }
.a-dir-rev { -webkit-animation-direction: reverse; animation-direction: reverse; }
.a-dir-alt { -webkit-animation-direction: alternate; animation-direction: alternate; }
.a-dir-alt-rev { -webkit-animation-direction: alternate-reverse; animation-direction: alternate-reverse; }
@media screen and (min-width: 48em) {
 .a-dir-norm-ns { -webkit-animation-direction: normal; animation-direction: normal; }
 .a-dir-rev-ns { -webkit-animation-direction: reverse; animation-direction: reverse; }
 .a-dir-alt-ns { -webkit-animation-direction: alternate; animation-direction: alternate; }
 .a-dir-alt-rev-ns { -webkit-animation-direction: alternate-reverse; animation-direction: alternate-reverse; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .a-dir-norm-m { -webkit-animation-direction: normal; animation-direction: normal; }
 .a-dir-rev-m { -webkit-animation-direction: reverse; animation-direction: reverse; }
 .a-dir-alt-m { -webkit-animation-direction: alternate; animation-direction: alternate; }
 .a-dir-alt-rev-m { -webkit-animation-direction: alternate-reverse; animation-direction: alternate-reverse; }
}
@media screen and (min-width: 64em) {
 .a-dir-norm-l { -webkit-animation-direction: normal; animation-direction: normal; }
 .a-dir-rev-l { -webkit-animation-direction: reverse; animation-direction: reverse; }
 .a-dir-alt-l { -webkit-animation-direction: alternate; animation-direction: alternate; }
 .a-dir-alt-rev-m { -webkit-animation-direction: alternate-reverse; animation-direction: alternate-reverse; }
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

ISC

