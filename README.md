# Houdini Dashed Border

Dashed borders in CSS with custom length, gap, and rounded end caps.

| CSS Custom Property Name | Type | Description | Default |
|-----|-------|------|
| `--border-thickness` | `number` | The thickness of the border drawn, in pixels | 2 |
| `--border-length` | `number` | The length of a dash, in pixels | 12 |
| `--border-gap` | `number` | The gap in-between each dash, in pixels | 5 |
| `--border-dash-cap` | `round | square | butt` | The end cap type for each dash. | round |
| `--border-color` | `color` | The color of the border. | `lightgrey` |

## Usage

🚧 Work in progress.

### Solid Border

To turn off dashes, set the `--border-gap` to `-1`.

### Hover Example

Often you'll want to have a dashed border by default and then on hover change the border to a solid line of a different color:

```css
div {
  --border-thickness: 2;
  --border-length: 12;
  --border-gap: 5;
  --border-dash-cap: round;
  --border-color: lightgrey;

  background: paint(dashed-border);
}

div:hover {
  --border-thickness: 3;
  --border-length: 100;
  --border-gap: -1;
  --border-color: #f8e515;

  background-color: #ffffef;
  cursor: pointer;
}
```

## Todo

- [ ] Add option to change border radius (`--border-radius`)
- [ ] Add option for multiple gap and length sizes of dashes
- [ ] Add random dash length and gap option
- [ ] Animate custom property changes.
