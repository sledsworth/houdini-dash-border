if (typeof registerPaint !== 'undefined') {
  class DashedBorder {
    static get inputProperties() {
      return [
        '--border-gap',
        '--border-length',
        '--border-thickness',
        '--border-dash-cap',
        '--border-color',
        '--border-radius',
      ]
    }

    paint(ctx, size, properties) {
      let borderGap = parseFloat(properties.get('--border-gap'))
      if (borderGap === NaN) {
        borderGap = 0
      }
      const borderLength = parseFloat(properties.get('--border-length')) || 8
      const borderRadius = parseFloat(properties.get('--border-radius')) || 2
      const borderDashCap = properties.get('--border-dash-cap') || 'round'
      const borderThickness =
        parseFloat(properties.get('--border-thickness')) || 2
      const borderColor = properties.get('--border-color') || 'black'

      const height = size.height
      const width = size.width

      let lineDash = []
      if (borderGap > 0) {
        lineDash = [borderLength, borderGap]
      }
      ctx.setLineDash(lineDash)

      ctx.lineCap = borderDashCap
      ctx.lineWidth = borderThickness
      ctx.strokeStyle = borderColor

      const inset = borderThickness / 2

      ctx.moveTo(inset + borderRadius, inset)

      //top
      ctx.lineTo(width - inset - borderRadius, inset)
      ctx.arcTo(
        width - inset,
        inset,
        width - inset,
        inset + borderRadius,
        borderRadius
      )

      //right
      ctx.lineTo(width - inset, height - inset - borderRadius)
      ctx.arcTo(
        width - inset,
        height - inset,
        width - inset - borderRadius,
        height - inset,
        borderRadius
      )

      //bottom
      ctx.lineTo(inset + borderRadius, height - inset)
      ctx.arcTo(
        inset,
        height - inset,
        inset,
        height - inset - borderRadius,
        borderRadius
      )

      //left
      ctx.lineTo(inset, inset + borderRadius)
      ctx.arcTo(inset, inset, inset + borderRadius, inset, borderRadius)

      ctx.stroke()
    }
  }

  registerPaint('dashed-border', DashedBorder)
}
