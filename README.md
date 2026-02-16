# css-animation-directions

Functional CSS for animation-directions

## Filesize

| File | Size |
|------|------|
| `dist/animation-directions.css` | 2473 bytes |
| `dist/animation-directions.min.css` | 1973 bytes (278 Gzipped) |

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
| `.a-direction-normal` | `animation-direction: normal;` |
| `.a-direction-reverse` | `animation-direction: reverse;` |
| `.a-direction-alt` | `animation-direction: alternate;` |
| `.a-direction-alt-reverse` | `animation-direction: alternate-reverse;` |
| `.a-direction-inherit` | `animation-direction: inherit;` |
| `.a-direction-initial` | `animation-direction: initial;` |
| `.a-direction-revert` | `animation-direction: revert;` |
| `.a-direction-revert-layer` | `animation-direction: revert-layer;` |
| `.a-direction-unset` | `animation-direction: unset;` |
| `.a-direction-normal-s` | `animation-direction: normal;` |
| `.a-direction-reverse-s` | `animation-direction: reverse;` |
| `.a-direction-alt-s` | `animation-direction: alternate;` |
| `.a-direction-alt-reverse-s` | `animation-direction: alternate-reverse;` |
| `.a-direction-inherit-s` | `animation-direction: inherit;` |
| `.a-direction-initial-s` | `animation-direction: initial;` |
| `.a-direction-revert-s` | `animation-direction: revert;` |
| `.a-direction-revert-layer-s` | `animation-direction: revert-layer;` |
| `.a-direction-unset-s` | `animation-direction: unset;` |
| `.a-direction-normal-m` | `animation-direction: normal;` |
| `.a-direction-reverse-m` | `animation-direction: reverse;` |
| `.a-direction-alt-m` | `animation-direction: alternate;` |
| `.a-direction-alt-reverse-m` | `animation-direction: alternate-reverse;` |
| `.a-direction-inherit-m` | `animation-direction: inherit;` |
| `.a-direction-initial-m` | `animation-direction: initial;` |
| `.a-direction-revert-m` | `animation-direction: revert;` |
| `.a-direction-revert-layer-m` | `animation-direction: revert-layer;` |
| `.a-direction-unset-m` | `animation-direction: unset;` |
| `.a-direction-normal-l` | `animation-direction: normal;` |
| `.a-direction-reverse-l` | `animation-direction: reverse;` |
| `.a-direction-alt-l` | `animation-direction: alternate;` |
| `.a-direction-alt-reverse-l` | `animation-direction: alternate-reverse;` |
| `.a-direction-inherit-l` | `animation-direction: inherit;` |
| `.a-direction-initial-l` | `animation-direction: initial;` |
| `.a-direction-revert-l` | `animation-direction: revert;` |
| `.a-direction-revert-layer-l` | `animation-direction: revert-layer;` |
| `.a-direction-unset-l` | `animation-direction: unset;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.a-direction-normal-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/animation-directions.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/animation-directions.css` — formatted
- `dist/animation-directions.min.css` — minified

## License

MIT
