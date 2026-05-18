# css-animation-directions

Functional CSS for animation-directions

## Filesize

| File | Size |
|------|------|
| `dist/animation-directions.css` | 1305 bytes |
| `dist/animation-directions.min.css` | 1075 bytes (185 Gzipped) |

## Install

```sh
npm install css-animation-directions
```

## Usage

### Import

```css
@import "css-animation-directions";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/css-animation-directions/dist/animation-directions.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/css-animation-directions/dist/animation-directions.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
| `.animation-direction-normal` | `animation-direction: normal;` |
| `.animation-direction-reverse` | `animation-direction: reverse;` |
| `.animation-direction-alt` | `animation-direction: alternate;` |
| `.animation-direction-alt-reverse` | `animation-direction: alternate-reverse;` |
| `.animation-direction-normal-s` | `animation-direction: normal;` |
| `.animation-direction-reverse-s` | `animation-direction: reverse;` |
| `.animation-direction-alt-s` | `animation-direction: alternate;` |
| `.animation-direction-alt-reverse-s` | `animation-direction: alternate-reverse;` |
| `.animation-direction-normal-m` | `animation-direction: normal;` |
| `.animation-direction-reverse-m` | `animation-direction: reverse;` |
| `.animation-direction-alt-m` | `animation-direction: alternate;` |
| `.animation-direction-alt-reverse-m` | `animation-direction: alternate-reverse;` |
| `.animation-direction-normal-l` | `animation-direction: normal;` |
| `.animation-direction-reverse-l` | `animation-direction: reverse;` |
| `.animation-direction-alt-l` | `animation-direction: alternate;` |
| `.animation-direction-alt-reverse-l` | `animation-direction: alternate-reverse;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.animation-direction-normal-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/animation-directions.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/animation-directions.css` — formatted
- `dist/animation-directions.min.css` — minified

## License

MIT
