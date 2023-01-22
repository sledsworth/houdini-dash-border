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
      const borderGap = parseFloat(properties.get('--border-gap')) || 4
      const borderLength = parseFloat(properties.get('--border-length')) || 8
      // TODO: Implement border radius
      // https://css-tricks.com/exploring-the-css-paint-api-rounding-shapes/#aa-first-the-css-setup may be useful
      const borderRadius = parseFloat(properties.get('--border-raduis')) || 2
      const borderDashCap = properties.get('--border-dash-cap')
      const borderThickness =
        parseFloat(properties.get('--border-thickness')) || 2
      const borderColor = properties.get('--border-color') || 'black'
      const height = size.height
      const width = size.width

      ctx.lineCap = borderDashCap
      ctx.lineWidth = borderThickness
      ctx.strokeStyle = borderColor

      let x = borderThickness / 2
      let y = borderThickness / 2

      //top
      while (x < width - borderThickness / 2) {
        ctx.moveTo(x, y)
        ctx.lineTo(Math.min(x + borderLength, width - borderThickness / 2), y)
        x = x + borderLength + borderGap
      }

      // right
      x = width - borderThickness / 2
      while (y < height - borderThickness / 2) {
        ctx.moveTo(x, y)
        ctx.lineTo(x, Math.min(y + borderLength, height - borderThickness / 2))
        y = y + borderLength + borderGap
      }

      x = borderThickness / 2
      y = borderThickness / 2
      while (y < height - borderThickness / 2) {
        ctx.moveTo(x, y)
        ctx.lineTo(x, Math.min(y + borderLength, height - borderThickness / 2))
        y = y + borderLength + borderGap
      }

      // // bottom
      x = borderThickness / 2
      y = height - borderThickness / 2
      while (x < width - borderThickness / 2) {
        ctx.moveTo(x, y)
        ctx.lineTo(Math.min(x + borderLength, width - borderThickness / 2), y)
        x = x + borderLength + borderGap
      }
      ctx.stroke()
      // ctx.closePath()
    }
  }

  registerPaint('dashed-border', DashedBorder)
}

// ctx.moveTo(borderThickness / 2, borderThickness / 2)
// //top
// ctx.lineTo(width - borderThickness / 2, borderThickness / 2)
// // right
// ctx.lineTo(width - borderThickness / 2, height - borderThickness / 2)
// //bottom
// ctx.lineTo(borderThickness / 2, height - borderThickness / 2)
// // left
// ctx.lineTo(borderThickness / 2, borderThickness / 2)
// ctx.stroke()

// const getSteps = (sizeVal) => {
// 	return Math.floor(sizeVal / (radius * 2) - 2)
// }

// const getOwnRadius = (sizeVal, otherRad) => {
// 	const steps = getSteps(sizeVal) + 1
// 	const totalSpace = sizeVal - radius * 2
// 	const spaceTaken = steps * (radius * 2)
// 	let pixelsRemaining = totalSpace - spaceTaken

// 	if (otherRad) {
// 		const radDif = otherRad - radius
// 		pixelsRemaining = totalSpace - spaceTaken - radDif
// 	}

// 	const newRadius = radius + pixelsRemaining / 2 / (steps + 1)
// 	return newRadius
// }

// const horizRadius = getOwnRadius(width, getOwnRadius(height))
// const vertRadius = getOwnRadius(height, getOwnRadius(width))

// // top
// for (let i = 0; i <= getSteps(width); i++) {
// 	ctx.beginPath()
// 	ctx.arc(
// 		horizRadius + horizRadius + horizRadius * i * 2,
// 		horizRadius + scallopWeight * 1,
// 		horizRadius,
// 		0,
// 		Math.PI,
// 		true
// 	)
// 	ctx.stroke()
// }

// // bottom
// for (let i = 0; i <= getSteps(width); i++) {
// 	ctx.beginPath()
// 	ctx.arc(
// 		horizRadius + horizRadius + horizRadius * i * 2,
// 		height - horizRadius - scallopWeight * 1,
// 		horizRadius,
// 		0,
// 		Math.PI,
// 		false
// 	)
// 	ctx.arc(
// 		horizRadius + horizRadius + horizRadius * i * 2,
// 		height - horizRadius - scallopWeight * 1,
// 		horizRadius,
// 		0,
// 		Math.PI,
// 		false
// 	)
// 	ctx.stroke()
// }

// // left
// for (let i = 0; i <= getSteps(height); i++) {
// 	ctx.beginPath()
// 	ctx.arc(
// 		vertRadius + scallopWeight * 1,
// 		vertRadius + vertRadius + vertRadius * i * 2,
// 		vertRadius,
// 		Math.PI * 0.5,
// 		Math.PI * 1.5,
// 		false
// 	)
// 	ctx.stroke()
// }

// // right
// for (let i = 0; i <= getSteps(height); i++) {
// 	ctx.beginPath()
// 	ctx.arc(
// 		width - vertRadius - scallopWeight * 1,
// 		vertRadius + vertRadius + vertRadius * i * 2,
// 		vertRadius,
// 		Math.PI * 0.5,
// 		Math.PI * 1.5,
// 		true
// 	)
// 	ctx.stroke()
// }
